<template>
  <div
    class="w-full flex justify-between items-center text-sm chat-transition hover:bg-[#FFFFFF1D] cursor-pointer px-4 py-2 min-w-72"
    :class="!navOpen && ' -translate-x-36 opacity-0'"
    :style="{ transitionDelay: `${index * 20}ms` }"
  >
    <!-- Profile Image -->
    <div
      class="rounded-full bg-red-500 w-8 h-8 mr-2 overflow-hidden transition-transform"
    >
      <!-- <img
          class="w-full rounded-full"
          :src="chat.assistant.avatar"
          alt="Profile Image"
        /> -->
    </div>

    <!-- Chat title -->
    <div class="flex flex-col flex-1">
      <div class="font-semibold">{{ chat.assistant.name }}</div>
      <div class="text-xs">{{ chat.title }}</div>
    </div>

    <div class="">
      {{ formatDate(chat.creationDate) }}
    </div>
  </div>
</template>

<script setup>
import formatDate from "../utils/formatDate.js";
</script>

<script>
export default {
  name: "Chat",
  components: {},
  props: {
    chat: Object,
    navOpen: Boolean,
    index: Number,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style></style>
