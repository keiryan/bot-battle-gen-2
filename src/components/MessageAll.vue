<template>
  <div
    class="w-screen h-screen fixed opacity-0 transition-custom"
    :class="messageAllOpen ? 'opacity-100 pointer-events-all' : 'pointer-events-none'"
  >
    <!-- Background blur -->
    <div
      class="w-full h-full absolute top-0 left-0 backdrop-blur backdrop-brightness-[0.20] hover:cursor-pointer"
      @click="$emit('toggle-app-settings')"
    ></div>
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "MessageAll",
  components: {},
  props: {
    messageAllOpen: Boolean,
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
