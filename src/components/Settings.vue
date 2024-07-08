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
          />
        </ul>
      </aside>
      <section class="flex-[3] dark-accent py-4 px-2">
        <div class="flex justify-between items-center">
            <div>Auto close sidebar</div>
            <Toggle />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<script>
import AppSettingsListOption from "./AppSettingsListOption.vue";
import Toggle from "./Toggle.vue";
export default {
  name: "Settings",
  components: {
    AppSettingsListOption,
    Toggle,
  },
  props: {
    settingsOpen: Boolean,
  },
  data() {
    return {
      settings: [
        {
          id: 1,
          title: "General",
          icon: "bolt",
        },
        {
          id: 2,
          title: "ChatGPT",
          icon: "bot",
        },
        {
          id: 3,
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

      selectedSetting: null,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style></style>
