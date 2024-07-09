<template>
  <div
    class="relative w-full flex flex-col cursor-pointer no-highlight transition-custom"
    @click="toggleDropdown"
    ref="dropdownRef"
  >
    <div
      class="p-2 border border-[#303030] dark-shadow w-full flex justify-between items-center rounded"
    >
      <div>{{ currentlySelectedValue ?? title }}</div>
      <ChevronUp
        size="20"
        class="transition-custom"
        :class="isOpen ? '' : 'rotate-180'"
      />
    </div>
    <ul
      class="absolute top-12 left-0 w-full dark-shadow bg-[#0E0E0ECB] border border-[#303030] drop-shadow-lg rounded transition-custom overflow-hidden backdrop-blur p-1 z-[999]"
      :class="isOpen ? '' : '-translate-y-2 opacity-0 pointer-events-none'"
    >
      <li
        class="p-2 hover-bg-glow hover:bg-[#FB562238] rounded transition-custom"
        v-for="(item, index) in options"
        :key="index"
        @mousemove="handleMouseMove($event, index)"
        @mouseleave="handleMouseLeave(index)"
        @click="setSelection(item)"
      >
        {{ item.name }}
        <span class="glow blur-md" :style="item.glowStyle"></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ChevronUp } from "lucide-vue-next";
import { ref, watch, defineEmits, onUnmounted, onMounted } from "vue";

const emit = defineEmits(["selected"]);

const props = defineProps({
  title: {
    type: String,
    default: "Dropdown",
  },
  options: {
    type: Array,
    default: () => new Array(4).fill("Option"),
  },
});

const isOpen = ref(false);
const currentlySelectedValue = ref(null);
const dropdownRef = ref(null);
// const items = ref(new Array(4).fill({}).map(() => ({ glowStyle: {} })));
const itemsWithGlow = ref(
  props.options.map((item) => ({ label: item, glowStyle: {} }))
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const setSelection = (item) => {
  currentlySelectedValue.value = item.name;
  emit("selected", item);
};

const handleMouseMove = (event, index) => {
  const li = event.target;
  const rect = li.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  itemsWithGlow.value[index].glowStyle = {
    left: `${x}px`,
    top: `${y}px`,
    background: "#F2BCAB",
  };
};

const handleMouseLeave = (index) => {
  itemsWithGlow.value[index].glowStyle = {};
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.no-highlight {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

.hover-bg-glow {
  position: relative;
  overflow: hidden;
}

.hover-bg-glow .glow {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: background 0.3s ease;
}
</style>
