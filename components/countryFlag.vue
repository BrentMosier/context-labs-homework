<template>
  <v-tooltip :text="nationality" location="bottom">
    <template #activator="{ props }">
      <country-flag v-bind="props" :country="flags[nationality]" size="big" style="border-radius: 12px;"/>
    </template>
  </v-tooltip>
</template>

<script setup>
import CountryFlag from "vue-country-flag-next";
import flags from "public/flags.json"

defineProps({nationality:{type: String, default:""}})
</script>