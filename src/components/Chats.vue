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
          <button
            class="flex items-center justify-center"
            @click="creatingNewChat = !creatingNewChat"
          >
            <Plus size="20" :toggled="creatingNewChat" />
          </button>
        </div>
      </nav>
      <!-- Add chat -->
      <!-- <div
        class="transition-custom"
        :class="creatingNewChat ? '' : '-translate-x-96'"
      >
        This is new
      </div> -->
      <div class="relative mt-4">
        <div
          class="flex flex-col gap-1 absolute top-0 left-0 transition-custom"
          :class="creatingNewChat ? '-left-64' : 'left-0'"
        >
          <Chat
            v-for="(chat, index) in chats"
            :key="chat.id"
            :chat="chat"
            :index="index + 1"
            :navOpen="navOpen === true && creatingNewChat === false"
            @click="updateCurrentChat(chat)"
          />
        </div>
        <div
          class="absolute transition-custom px-4 w-full flex flex-col gap-2"
          :class="creatingNewChat ? 'left-0' : 'left-full'"
        >
          <Dropdown
            title="Chat type"
            :options="[
              { name: 'ChatGPT', value: 'chatgpt' },
              { name: 'Gemini', value: 'gemini' },
            ]"
            @selected="setChatType"
          />
          <Dropdown
            title="Chat Params"
            :options="[
              { name: 'GPT 3', value: 'gpt-3-turbo' },
              { name: 'GPT 4', value: 'gpt-4-turbo' },
              { name: 'GPT 4o', value: 'gpt-4o' },
            ]"
            v-if="selectedChatType?.value === 'chatgpt'"
            @selected="setChatParams"
          />

          <!-- Create New chat -->
          <button
            class="bg-[#2C93FF] rounded-full p-1 mt-2 hover:drop-shadow-[0_4px_8px_rgba(44,157,255,0.50)] transition-custom"
            v-if="selectedChatParams?.value"
            @click="createNewChat"
          >
            Create chat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Settings2, PanelLeftClose } from "lucide-vue-next";
</script>

<script>
import Chat from "./Chat.vue";
import Dropdown from "./Dropdown.vue";
import Plus from "./Plus.vue";
export default {
  name: "Chats",
  components: {
    Dropdown,
  },
  props: {
    navOpen: Boolean,
    chats: Array,
  },
  data() {
    return {
      creatingNewChat: false,
      selectedChatType: null,
      selectedChatParams: null,
    };
  },
  methods: {
    updateCurrentChat(chat) {
      this.$emit("update-current-chat", chat);
    },
    togglePanel() {
      this.$emit("toggle-panel");
    },

    createNewChat() {
      console.count("createNewChat");
      this.creatingNewChat = !this.creatingNewChat;
      const newChat = {
        id: Math.random(),
        messages: [],
        title: this.selectedChatParams?.name,
        assistant: {
          name: this.selectedChatType?.value,
          avatar: "https://randomuser.me/api/portraits",
        },
        currentModel: this.selectedChatParams?.value,
        creationDate: Date.now(),
      };
      this.$emit("create-new-chat", newChat);

      console.log("selectedChatType", this.selectedChatType);

      this.selectedChatType = null;
      this.selectedChatParams = null;
    },

    setChatType(item) {
      this.selectedChatType = item;
      console.log("setChatType", item);
    },

    setChatParams(item) {
      console.log(item);
      this.selectedChatParams = item;
    },
  },
  computed: {},
  mounted() {},
  created() {},
  updated() {},
  destroyed() {},
  watch: {
    chats: {
      deep: true,
      handler(val) {
        // localStorage.setItem("chats", JSON.stringify(val));
      },
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: none;
}
</style>
