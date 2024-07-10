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
      <EmptyConversation v-if="chat.messages.length === 0" />
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
import { ref, defineProps, watch, getCurrentInstance } from "vue";
import EmptyConversation from "./EmptyConversation.vue";
import getAssistantResponse from "../utils/getAssistantResponse";

const { appContext } = getCurrentInstance();
const settings = appContext.config.globalProperties.$settings;

const props = defineProps({
  navOpen: Boolean,
  chatId: Number,
  chat: Object,
});

const chat = ref({
  id: Math.random(),
  messages: [],
});
const emit = defineEmits(["submit-message", "toggle-panel"]);
const initialLength = ref(props.chat?.messages?.length);
const loading = ref(true);

const submitMessage = async (message) => {
  emit("submit-message", {
    id: Math.random(),
    time: Date.now(),
    sender: "user",
    content: message,
  });

  // Read array from local storage
  const chats = JSON.parse(localStorage.getItem("chats")) || [];

  if (chats.length > 0) {
    // Find the chat with the given ID
    const chatIndex = chats.findIndex((chat) => {
      console.log("findIndex", chat.id, props.chat.id);
      return chat.id === props.chat.id;
    });

    const newMessage = {
      id: Math.random(),
      time: Date.now(),
      sender: "user",
      content: message,
    };

    // Add the message to the chat
    chats[chatIndex].messages.push(newMessage);

    chat.value.messages.push(newMessage);

    // Update the local storage
    localStorage.setItem("chats", JSON.stringify(chats));
    const tokenLegend = {
      chatgpt: settings.chatGPTToken,
    };
    // console.log("chat", {
    //   ...props.chat,
    //   token: tokenLegend[props.chat.assistant.name],
    // });
    await console.log(
      "message from chatgpt",
      getAssistantResponse({
        messages: chat.value.messages,
        token: tokenLegend[props.chat.assistant.name],
        currentModel: props.chat.currentModel,
      })
    );
  }
};

watch(
  () => props.chat,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    // if (newValue) {
    //   initialLength.value = newValue.messages.length;
    // }

    chat.value.messages = newValue.messages;
  },
  { deep: true }
);
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
