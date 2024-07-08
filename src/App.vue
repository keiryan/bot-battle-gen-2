<template>
  <div class="w-screen h-screen flex text-white">
    <Chats
      @toggle-panel="togglePanel"
      :navOpen="navOpen"
      @toggle-app-settings="toggleSettings"
      @create-new-chat="createNewChat"
    />
    <ChatWindow :navOpen="navOpen" @toggle-panel="togglePanel" />
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
      currentChat: {
        id: Math.random(),
        messages: [],
        title: "Chat with John Doe",
        assistant: {
          name: "John Doe",
          avatar: "https://randomuser.me/api/portraits",
        },
        time: "2:30 PM",
      },
      navOpen: true,
      messageBarOpen: false,
      settingsOpen: false,
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

    createNewChat(chatType) {
      console.log("create new chat");
      // Create a new chat, write it to local storage, and update the state
      // localStorage.setItem(
      //   "chats",
      //   JSON.stringify([
      //     ...JSON.parse(localStorage.getItem("chats")),
      //     {
      //       id: Math.random(),
      //       messages: [],
      //       title: "Chat with Jane Doe",
      //       assistant: {
      //         name: "Jane Doe",
      //         avatar: "https://randomuser.me/api/portraits",
      //       },
      //       time: "2:30 PM",
      //     },
      //   ])
      // );
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
