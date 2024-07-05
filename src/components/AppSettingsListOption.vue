<template>
  <li
    class="flex items-center gap-2 p-2 w-full rounded dark-hover"
    :class="''"
  >
    <div>
      <Bolt size="20" v-if="setting.icon === 'bolt'" />
      <Atom size="20" v-if="setting.icon === 'atom'" />
      <Bot size="20" v-if="setting.icon === 'bot'" />
    </div>
    <div class="capitalize">{{ setting.title }}</div>
  </li>
</template>

<script setup>
import { Bolt, Atom, Bot } from "lucide-vue-next";
</script>

<script>
export default {
  name: "AppSettingsListOption",
  components: {},
  props: {
    setting: Object,
    selectedSetting: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style></style>
