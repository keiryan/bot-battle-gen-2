<template>
  <div class="w-screen h-screen flex text-white">
    <Chats @toggle-panel="togglePanel" :navOpen="navOpen" />
    <ChatWindow :navOpen="navOpen" @toggle-panel="togglePanel" />
  </div>
</template>

<script>
import Chats from "./components/Chats.vue";
import ChatWindow from "./components/ChatWindow.vue";
export default {
  name: "App",
  components: {
    Chats,
    ChatWindow,
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
    };
  },
  computed: {},
  methods: {
    togglePanel() {
      this.navOpen = !this.navOpen;
      console.log(this.navOpen);
    },
  },
  mounted() {},
  created() {},
  updated() {},
  destroyed() {},
};
</script>

<style></style>
