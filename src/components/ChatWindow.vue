<template>
  <div
    class="flex-[6] bg-black border-l border-[#303030] flex flex-col transition-custom"
    :class="navOpen ? 'border-[#303030]' : 'border-black'"
  >
    <!-- Header -->
    <header class="p-4 bg-[#171717] w-full border-b border-[#303030] flex justify-between items-center">
      <div class="text-sm font-semibold flex gap-2 items-center">
        <button
          class="app-button"
          @click="$emit('toggle-panel')"
          :class="navOpen ? 'opacity-0' : ''"
        >
          <PanelLeftClose size="20" />
        </button>
        <div class="transition-custom" :class="navOpen && '-translate-x-8'">
          ChatGPT
        </div>
      </div>
      <div class="dark-hover p-1 transition-custom rounded-full">
        <Bolt size="20" />
      </div>
    </header>
  </div>
</template>

<script setup>
import { PanelLeftClose, Bolt } from "lucide-vue-next";
</script>

<script>
export default {
  name: "ChatWindow",
  components: {},
  props: {
    navOpen: Boolean,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {},
  updated() {},
  destroyed() {},
};
</script>

<style></style>
