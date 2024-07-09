<template>
  <div class="flex gap-1">
    <div class="" v-for="(ball, index) in ballCount">
      <!-- Ball -->
      <div
        class="w-2 h-2 bg-[#F6511D] rounded-full ball-animation"
        :style="{ animationDelay: `${index * 0.2}s` }"
      ></div>
      <!-- Shadow -->
      <div
        class="w-2 h-0.5 bg-[#0D1117] rounded-full shadow-animation"
        :style="{ animationDelay: `${index * 0.2}s` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BouncyBalls",
  components: {},
  props: {
    ballCount: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.ball-animation {
  animation: bounce 0.5s infinite alternate;
}

.shadow-animation {
  animation: shadow 0.5s infinite alternate;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@keyframes shadow {
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
  }
}
</style>
