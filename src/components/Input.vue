<template>
  <div class="flex items-center gap-4 pl-1 text-sm mb-4">
    <div class="w-20 text-[#FFFFFF7B]">{{ text }}</div>
    <form
      class="flex items-center h-8 pl-2 rounded flex-1 bg-[#151515FF]"
      autocomplete="off"
      @submit="toggleEditing"
    >
      <input
        :type="TypeLegend[type] || 'text'"
        class="w-full mr-2 bg-transparent outline-none border-none"
        v-model="value"
        @blur="toggleEditing"
        v-if="editing"
        ref="autoFocusInput"
        autocomplete="new-password"
      />
      <div
        class="flex w-full items-center h-8 opacity-50 cursor-pointer"
        v-if="!editing"
        @click="toggleEditing"
      >
        {{ type === "sensitive" ? value.replace(/./g, "•") : value }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    active: Boolean,
    toggleCommandBar: Function,
    text: String,
    keyName: String,
    type: String,
    default: String,
  },

  mounted() {
    this.value = localStorage.getItem(this.keyName) || this.default;
  },

  methods: {
    handleClick(event) {
      // Only toggle if the event was triggered on this div and not a child
      if (event.target === event.currentTarget) {
        this.toggleCommandBar();
      }
    },

    toggleEditing(e) {
      if (e) {
        e.preventDefault();
      }
      this.editing = !this.editing;
      if (this.editing) {
        this.$nextTick(() => {
          this.$refs.autoFocusInput.focus();
        });
      } else {
        localStorage.setItem(this.keyName, this.value);
      }
    },
  },

  data() {
    return {
      value: "",
      editing: false,
      TypeLegend: {
        sensitive: "password",
        text: "text",
      },
    };
  },
};
</script>

<style></style>
