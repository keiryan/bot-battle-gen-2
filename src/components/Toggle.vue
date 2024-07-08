<template>
  <div
    @click="toggle"
    class="w-10 h-6 bg-gray-800 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out overflow-hidden"
    :class="toggled && 'bg-green-500'"
  >
    <div
      class="w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-200 cubic-bezier-[-1.36e-35,-3.26,4.26,1]"
      :class="toggled ? 'left-[1.15rem]' : 'left-0.5'"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggled: false,
    };
  },

  methods: {
    toggle() {
      this.toggled = !this.toggled;
      this.$emit("toggled", this.toggled);
    },
  },
};
</script>
