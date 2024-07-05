<template>
  <div
    class="flex-[2] dark-accent transition-custom overflow-y-scroll overflow-x-hidden no-scrollbar"
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
            <!-- If clicked emit to app component -->
          <button class="app-button" @click="$emit('toggle-app-settings')">
            <Settings2 size="20" />
          </button>
          <button class="app-button">
            <Plus size="20" />
          </button>
        </div>
      </nav>
      <div class="flex flex-col gap-1 mt-4">
        <Chat
          v-for="(chat, index) in chats"
          :key="chat.id"
          :chat="chat"
          :index="index + 1"
          :navOpen="navOpen"
        />
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
      chats: new Array(16).fill({
        id: Math.random(),
        messages: [],
        title: "Chat with Jane Doe",
        assistant: {
          name: "Jane Doe",
          avatar: "https://randomuser.me/api/portraits",
        },
        creationDate: "2:30 PM",
      }),
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

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: none;
}
</style>
