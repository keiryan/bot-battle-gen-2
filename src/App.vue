<template>
  <div class="w-screen h-screen flex text-white">
    <Chats
      @toggle-panel="togglePanel"
      :navOpen="navOpen"
      @toggle-app-settings="toggleSettings"
      @create-new-chat="createNewChat"
      :chats="chats"
      @update-current-chat="updateCurrentChat"
    />
    <ChatWindow
      :navOpen="navOpen"
      @toggle-panel="togglePanel"
      :chat="currentChat"
    />
    <MessageBar
      :messageBarOpen="messageBarOpen"
      @toggle-app-settings="toggleCommandBar"
      @concurrent-message="submitConcurrentMessage"
    />
    <Settings
      :settingsOpen="settingsOpen"
      @toggle-app-settings="toggleSettings"
    />
  </div>
</template>

<script>
import Chats from "./components/Chats.vue";
import ChatWindow from "./components/ChatWindow.vue";
import MessageBar from "./components/MessageBar.vue";
import Settings from "./components/Settings.vue";

const localChats = () => {
  const chats = localStorage.getItem("chats");

  if (chats) {
    return [...JSON.parse(localStorage.getItem("chats"))].sort(
      (a, b) => b.creationDate - a.creationDate
    );
  } else {
    const defaultChat = {
      id: Math.random(),
      messages: [],
      title: "ChatGPT",
      assistant: {
        name: "ChatGPT",
        avatar: "https://randomuser.me/api/portraits",
      },
      creationDate: Date.now(),
    };
    localStorage.setItem("chats", JSON.stringify([defaultChat]));
    return [defaultChat];
  }
};

export default {
  name: "App",
  components: {
    Chats,
    ChatWindow,
    MessageBar,
    Settings,
  },
  props: {},
  data() {
    return {
      // Latest chat
      currentChat: localChats().at(-1),
      navOpen: true,
      messageBarOpen: false,
      settingsOpen: false,
      chats: localChats(),
    };
  },
  computed: {},
  methods: {
    togglePanel() {
      this.navOpen = !this.navOpen;
    },

    handleKeyDown(event) {
      if (event.metaKey && event.key === "k") {
        // Command + K
        event.preventDefault();
        this.toggleCommandBar();
      }
    },

    toggleCommandBar() {
      this.messageBarOpen = !this.messageBarOpen;
    },

    toggleSettings() {
      this.settingsOpen = !this.settingsOpen;
    },

    submitConcurrentMessage(message) {
      console.log("app level", message);
    },

    createNewChat(passedChat) {
      this.currentChat = passedChat;

      console.log("createNewChat app", passedChat);

      this.chats = [...this.chats, passedChat].sort(
        (a, b) => b.creationDate - a.creationDate
      );
      localStorage.setItem("chats", JSON.stringify(this.chats));
    },

    updateCurrentChat(chat) {
      this.currentChat = chat;
      if (this.$settings.autoCloseMessageBar) {
        this.navOpen = false;
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },

  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  created() {},
  updated() {},
  destroyed() {},
};
</script>

<style></style>
