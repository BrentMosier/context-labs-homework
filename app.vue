<template>
  <v-app>
    <div>Hello World</div>
    <div>{{ myData?.userData }}</div>
    <v-btn>
  Button
</v-btn>
  </v-app>
</template>

<script setup lang="ts">
const {data: myData} = await useFetch('/api/clients');


</script>