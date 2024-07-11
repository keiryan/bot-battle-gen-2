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
import creationary from "./utils/creationary";

const localChats = () => {
  const chats = localStorage.getItem("chats");

  if (chats) {
    return [...JSON.parse(localStorage.getItem("chats"))].sort(
      (a, b) => b.creationDate - a.creationDate
    );
  } else {
    const newChat = creationary();
    localStorage.setItem("chats", JSON.stringify([newChat]));
    return [newChat];
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
      // this.currentChat = passedChat;

      console.log("createNewChat app", passedChat);
      console.log("creationary response", creationary(passedChat));

      this.chats = [...this.chats, creationary(passedChat)].sort(
        (a, b) => b.creationDate - a.creationDate
      );
      localStorage.setItem("chats", JSON.stringify(this.chats));
      this.updateCurrentChat(this.chats.at(-1));
    },

    updateCurrentChat(chat) {
      console.log("updateCurrentChat", chat);
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
