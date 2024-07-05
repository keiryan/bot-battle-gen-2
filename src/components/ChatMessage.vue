<template>
  <li
    class="w-full flex transition-custom"
    :class="message.sender === 'user' && 'justify-end'"
    :style="{
      paddingTop: noPadding ? '0.3rem' : '2rem',
    }"
  >
    <div
      class="bg-[#2C93FF] w-fit py-1 px-3 rounded-full"
      v-if="message.sender === 'user'"
      ref="userMessage"
    >
      {{ message.content }}
    </div>
    <div
      v-else
      class="flex items-center gap-2"
    >
      <img
        class="w-8 h-8 rounded-full"
        :src="getImageUrl(message.icon)"
        alt="Profile Image"
      />
      <div class="flex flex-col">
        <div class="text-xs">{{ message.sender }}</div>
        <div>
          {{ message.content }}
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import getImageUrl from "../utils/imageGrabber.js";
</script>

<script>
import { ref } from "vue";
export default {
  name: "ChatMessage",
  components: {},
  props: {
    message: Object,
    noPadding: Boolean,
    index: Number,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    // Remove the transform property after the first message
    // Wait index x 10ms before animating the message
    // setTimeout(() => {
    //   this.$refs.userMessage.style.transform = "";
    // }, this.index * 20);
  },
};
</script>

<style scoped></style>
