<template>
  <div class="w-screen h-screen flex text-white">
    <Chats
      @toggle-panel="togglePanel"
      :navOpen="navOpen"
      @toggle-app-settings="toggleCommandBar"
    />
    <ChatWindow :navOpen="navOpen" @toggle-panel="togglePanel" />
    <MessageBar
      :messageBarOpen="messageBarOpen"
      @toggle-app-settings="toggleCommandBar"
      @concurrent-message="submitConcurrentMessage"
    />
  </div>
</template>

<script>
import Chats from "./components/Chats.vue";
import ChatWindow from "./components/ChatWindow.vue";
import MessageBar from "./components/MessageBar.vue";
export default {
  name: "App",
  components: {
    Chats,
    ChatWindow,
    MessageBar,
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

    submitConcurrentMessage(message) {
      console.log("app level", message);
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
