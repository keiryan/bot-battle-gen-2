<template>
  <div
    class="flex-[2] bg-[#171717] transition-custom overflow-hidden"
    :class="navOpen ? 'max-w-[18rem]' : 'max-w-0'"
  >
    <div class="flex flex-col">
      <nav class="flex justify-between items-center p-4">
        <div class="text-xl font-semibold">
          <button class="app-button" @click="togglePanel">
            <PanelLeftClose size="20" />
          </button>
        </div>
        <div class="flex gap-2">
          <button class="app-button">
            <Settings2 size="20" />
          </button>
          <button class="app-button">
            <Plus size="20" />
          </button>
        </div>
      </nav>
      <div class="flex flex-col gap-1 mt-4">
        <Chat v-for="chat in chats" :key="chat.id" :chat="chat" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Settings2, Plus, PanelLeftClose } from "lucide-vue-next";
</script>

<script>
import Chat from "./Chat.vue";
export default {
  name: "Chats",
  components: {},
  props: {
    navOpen: Boolean,
  },
  data() {
    return {
      chats: [
        {
          id: Math.random(),
          messages: [],
          title: "Chat with John Doe",
          assistant: {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits",
          },
          creationDate: "2:30 PM",
        },
        {
          id: Math.random(),
          messages: [],
          title: "Chat with Jane Doe",
          assistant: {
            name: "Jane Doe",
            avatar: "https://randomuser.me/api/portraits",
          },
          creationDate: "2:30 PM",
        },
      ],
    };
  },
  methods: {
    togglePanel() {
      this.$emit("toggle-panel");
    },
  },
  computed: {},
  mounted() {},
  created() {},
  updated() {},
  destroyed() {},
};
</script>

<style></style>
