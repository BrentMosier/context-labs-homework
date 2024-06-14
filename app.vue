<template>
  <div>
    <div>Hello World</div>
    <div>{{ myData?.userData }}</div>
  </div>
</template>

<script setup lang="ts">
const {data: myData} = await useFetch('/api/clients');


</script>