<template>
  <div class="relative w-7 h-7 app-button" @click="toggle">
    <!-- Horizontal -->
    <div
      class="w-[16px] h-[2px] bg-white rounded-full absolute calc-position"
    />
    <!-- Vertical -->
    <div
      class="w-[16px] h-[2px] bg-white rounded-full absolute calc-position transition-transform duration-200 ease-in-out transform origin-center"
      :class="!toggled && 'rotate-90'"
    />
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "Plus",
  components: {},
  props: {
    toggled: Boolean,
  },
  data() {
    return {
      //   toggled: false,
    };
  },
  computed: {},
  methods: {
    toggle() {
      //   this.toggled = !this.toggled;
      this.$emit("toggled");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.calc-position {
  top: calc(50%);
  left: calc(50% - 8px);
}
</style>
