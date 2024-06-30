<template>
  <div class="w-full flex justify-between items-center text-sm dark-hover px-4 py-2 min-w-72 transition-custom">
    <!-- Profile Image -->
    <div class="rounded-full bg-red-500 w-8 h-8 mr-2 overflow-hidden">
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
      {{ chat.creationDate }}
    </div>
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "Chat",
  components: {},
  props: {
    chat: Object,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
