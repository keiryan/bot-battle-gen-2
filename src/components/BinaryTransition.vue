<template>
  <div class="text-sm font-mono">
    <span
      v-for="(char, index) in displayText"
      :key="index"
      :class="[
        'transition-all duration-300 ease-in-out',
        char === targetText[index] ? 'text-white' : 'text-green-500',
      ]"
    >
      {{ char }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BinaryTransition",
  props: {
    targetText: {
      type: String,
      required: true,
    },
    transitionSpeed: {
      type: Number,
      default: 50, // Time in milliseconds between changes for each character
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      displayText: this.targetText.split("").map(() => this.getRandomBinary()),
    };
  },
  mounted() {
    setTimeout(() => {
      this.startTransition();
    }, this.index * 100);
  },
  methods: {
    getRandomBinary() {
      return Math.random() > 0.5 ? "1" : "0";
    },
    startTransition() {
      const length = this.targetText.length;
      this.displayText = this.targetText
        .split("")
        .map(() => this.getRandomBinary());

      this.targetText.split("").forEach((char, index) => {
        setTimeout(() => {
          this.displayText.splice(index, 1, char);
        }, index * this.transitionSpeed);
      });
    },
  },
};
</script>

<style scoped>
@import "tailwindcss/utilities";

.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
