<template>
  <form
    class="w-full pl-4 p-1 dark-accent rounded-full flex items-center"
    @submit="submitMessage"
  >
    <input
      type="text"
      class="bg-transparent outline-none border-none text-white w-full text-sm"
      autocomplete="off"
      placeholder="Type a message..."
      v-model="message"
    />
    <div
      class="p-1 rounded-full transition-custom hover:bg-[#ffffff20]"
      :class="message.trim().length === 0 && 'pointer-events-none opacity-25'"
      @click="submitMessage"
    >
      <Forward class="cursor-pointer" />
    </div>
  </form>
</template>

<script setup>
import { Forward } from "lucide-vue-next";
</script>

<script>
export default {
  name: "ChatWindowInput",
  components: {},
  props: {},
  data() {
    return {
      message: "",
    };
  },
  computed: {},
  methods: {
    submitMessage(e) {
      e.preventDefault();
      if (this.message.trim().length > 0) {
        this.$emit("submit-message", this.message);
        this.message = "";
      }
    },
  },
  mounted() {},
};
</script>

<style></style>
