<template>
  <div
    class="flex-[6] bg-black border-l border-[#303030] flex flex-col transition-custom items-center overflow-x-hidden"
    :class="navOpen ? 'border-[#303030]' : 'border-black'"
  >
    <!-- Header -->
    <header
      class="p-4 dark-accent w-full border-b border-[#303030] flex justify-between items-center"
    >
      <div class="text-sm font-semibold flex gap-2 items-center">
        <button
          class="app-button"
          @click="$emit('toggle-panel')"
          :class="navOpen ? 'opacity-0' : ''"
        >
          <PanelLeftClose size="20" />
        </button>
        <div class="transition-custom" :class="navOpen && '-translate-x-8'">
          ChatGPT
        </div>
      </div>
      <div class="dark-hover p-1 transition-custom rounded-full">
        <Bolt size="20" />
      </div>
    </header>
    <!-- Chat Window -->
    <section class="w-full max-w-screen-lg flex flex-col flex-1 p-4">
      <transition-group
        name="list"
        tag="ul"
        class="flex-1 items-center flex flex-col"
        appear
      >
        <ChatMessage
          v-for="(message, index) in chat.messages"
          :key="message.id"
          :message="message"
          :noPadding="
            index > 0 && chat.messages[index - 1].sender === message.sender
          "
          :index="index"
          :noDelay="chat.messages.length > initialLength"
        />
      </transition-group>
      <ChatWindowInput @submit-message="submitMessage" />
    </section>
  </div>
</template>

<script setup>
import { PanelLeftClose, Bolt } from "lucide-vue-next";
import ChatWindowInput from "./ChatWindowInput.vue";
import ChatMessage from "./ChatMessage.vue";
import { ref, defineProps } from "vue";

const props = defineProps({
  navOpen: Boolean,
  chatId: Number,
});

const chat = ref({
  id: Math.random(),
  messages: [
    {
      id: 1,
      sender: "user",
      content: "Hello, how can I help you today?",
    },
    {
      id: 2,
      sender: "assistant",
      content: "Hi there! I'm here to help you with anything.",
      icon: "chatgpt.png",
    },
    {
      id: 3,
      sender: "user",
      content: "Woah!",
    },
    {
      id: 4,
      sender: "assistant",
      content: "Hi there! I'm here to help you with anything.",
      icon: "gemini.svg",
    },
  ],
});

const initialLength = ref(chat.value.messages.length);
const loading = ref(true);

const submitMessage = (message) => {
  chat.value.messages.push({
    id: Date.now(),
    sender: "user",
    content: message,
  });
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
