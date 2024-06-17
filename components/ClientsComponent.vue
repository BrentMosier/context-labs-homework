<template>
  <v-container>
    <v-col cols="12">
      <v-text-field
        v-model="fieldSearch"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        type="input"
        variant="solo"
        rounded="xl"
      />
    </v-col>
    <v-col cols="12">
      <ClientList :filtered-clients="filteredClients"/>
    </v-col>
  </v-container>
</template>

<script setup>
const allClients = ref([]);
const filteredClients = ref([]);
const fieldSearch = ref("");

const getClients = async () => {
  const myData = await $fetch("http://localhost:3000/api/clients");
  allClients.value = myData || [];
  filteredClients.value = allClients.value;
};

onMounted(getClients);

watch(fieldSearch, async (newSearch) => {
  //when updating search field, compare search value against all properties in each client
  if (newSearch === "") {
    filteredClients.value = allClients.value;
  } else {
    filteredClients.value = [];
    allClients.value.forEach((client) => {
      for (const attribute in client) {
        if (
          typeof client[attribute] == "string" &&
          client[attribute].toLowerCase().includes(newSearch.toLowerCase())
        ) {
          filteredClients.value.push(client);
          break;
        }
      }
    });
  }
});
</script>
