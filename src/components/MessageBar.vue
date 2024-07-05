<template>
  <div
    class="w-screen h-screen fixed opacity-0 transition-custom flex items-center justify-center"
    :class="
      messageBarOpen ? 'opacity-100 pointer-events-all' : 'pointer-events-none'
    "
  >
    <!-- Background blur -->
    <div class="background-blur" @click="$emit('toggle-app-settings')" />
    <div class="w-full max-w-screen-sm z-50">
      <div class="flex items-center">
        <!-- <div
          class="flex items-center cursor-pointer bg-[#060606FF] rounded-full border border-[#282828] overflow-hidden"
          :class="
            settingsOpen ? 'w-0 opacity-0 pointer-events-none' : 'p-2 mr-2'
          "
          @click="$emit('toggle-app-settings')"
        >
          <Settings2
            size="20"
            class="transition-all duration-300 ease-in-out opacity-50 hover:opacity-100"
            :class="settingsOpen && '-translate-x-52'"
          />
        </div> -->
        <form
          class="flex flex-1 gap-2 bg-[#060606FF] p-2 px-3 rounded-full border border-[#282828]"
          @submit="submitConcurrentMessage"
        >
          <input
            type="text"
            class="bg-transparent outline-none border-none text-white w-full"
            autocomplete="off"
            v-model="message"
            ref="inputToFocus"
            placeholder="Message concurrent chats..."
          />
          <div
            class="transition-all duration-300 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"
          >
            <Search @click="submitConcurrentMessage" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Settings2, Search } from "lucide-vue-next";
</script>

<script>
export default {
  name: "MessageBar",
  components: {},
  props: {
    messageBarOpen: Boolean,
  },
  data() {
    return {
      message: "",
      settingsOpen: false,
    };
  },
  computed: {},
  methods: {
    submitConcurrentMessage(e) {
      e.preventDefault();
      this.$emit("concurrent-message", this.message);
      this.message = "";

      if (this.$settings.autoCloseMessageBar) {
        this.$emit("toggle-app-settings");
      }
    },
  },
  mounted() {},
  created() {},
  updated() {},
  destroyed() {},
  watch: {
    messageBarOpen: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$refs.inputToFocus.focus();
        }
      },
    },
  },
};
</script>
