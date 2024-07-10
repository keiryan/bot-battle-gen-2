<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 transition-custom flex items-center justify-center"
    :class="settingsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
  >
    <div
      class="background-blur transition-custom"
      @click="$emit('toggle-app-settings')"
    />

    <div
      class="w-full max-w-screen-sm rounded border border-[#303030] z-50 flex"
    >
      <aside class="flex flex-1 p-2 bg-[#111111] border-r border-[#303030]">
        <ul class="w-full">
          <AppSettingsListOption
            v-for="setting in settings"
            :setting="setting"
            :key="setting.id"
            @click="currentPage = setting.id"
          />
        </ul>
      </aside>
      <section class="flex-[3] dark-accent py-4 px-2">
        <!-- General Settings -->
        <div
          class="flex justify-between items-center"
          v-if="currentPage === 'settings'"
        >
          <div>Auto close sidebar</div>
          <Toggle
            @toggle="handleAutoCloseSidebarToggle($event, 'autoCloseSidebar')"
            :toggled="autoCloseMessageBar"
          />
        </div>

        <!-- ChatGPT Settings -->
        <div class="" v-if="currentPage === 'chatgpt'">
          <div>
            <Input
              text="ChatGPT API Key"
              type="sensitive"
              keyName="ChatGPTAPIKey"
              default=""
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<script>
import AppSettingsListOption from "./AppSettingsListOption.vue";
import Input from "./Input.vue";
import Toggle from "./Toggle.vue";
export default {
  name: "Settings",
  components: {
    AppSettingsListOption,
    Toggle,
    Input,
  },
  props: {
    settingsOpen: Boolean,
  },
  data() {
    return {
      settings: [
        {
          id: "settings",
          title: "General",
          icon: "bolt",
        },
        {
          id: "chatgpt",
          title: "ChatGPT",
          icon: "bot",
        },
        {
          id: "gemini",
          title: "Gemini",
          icon: "atom",
        },
        // {
        //   id: 4,
        //   title: "Privacy",
        //   icon: "Lock",
        // },
        // {
        //   id: 5,
        //   title: "Help",
        //   icon: "HelpCircle",
        // },
      ],
      autoCloseMessageBar: this.$settings.autoCloseMessageBar,
      selectedSetting: null,
      currentPage: "settings",
    };
  },
  computed: {},
  methods: {
    handleAutoCloseSidebarToggle(event, setting) {
      this.autoCloseMessageBar = !this.autoCloseMessageBar;
      this.$settings.autoCloseMessageBar = !this.$settings.autoCloseMessageBar;
    },
  },
  mounted() {},
};
</script>

<style></style>
