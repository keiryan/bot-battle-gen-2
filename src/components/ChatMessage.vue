<template>
  <li
    class="w-full flex wrap break-words gap-2"
    :class="message.sender === 'user' && 'justify-end'"
    :style="[messageStyle, { paddingTop: noPadding ? '0.1rem' : '2rem' }]"
  >
    <div
      class="bg-[#2C93FF] w-fit py-1 px-3 rounded-full"
      v-if="message.sender === 'user'"
    >
      {{ message.content }}
    </div>
    <div v-else class="flex gap-2">
      <img
        class="w-8 h-8 rounded-full"
        :src="getImageUrl(message.chatType)"
        alt="Profile Image"
      />
      <div class="flex flex-col">
        <div class="text-xs">{{ message.sender }}</div>
        <div>
          <BouncyBalls v-if="loading" class="translate-y-8" />
          <BinaryTransition
            v-else
            :targetText="message.content"
            :index="index"
            :transitionSpeed="(20 / message.content.length) * 50"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { computed, onMounted } from "vue";
import getImageUrl from "../utils/imageGrabber.js";
import BouncyBalls from "./BouncyBalls.vue";
import BinaryTransition from "./BinaryTransition.vue";

const props = defineProps({
  message: Object,
  noPadding: Boolean,
  index: Number,
  noDelay: Boolean,
  loading: Boolean,
});

onMounted(() => {
  //   if (props.loading) {
  //     setTimeout(() => {
  //       props.loading = false;
  //     }, 2000);
  //   }
  console.log("Message loaded", props.message);
});

const messageStyle = computed(() => ({
  transitionDelay: !props.noDelay ? `${props.index * 100}ms` : "0ms",
}));
</script>

<style scoped>
/* No changes needed here */
</style>
