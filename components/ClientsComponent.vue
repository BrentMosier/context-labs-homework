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
        bg-color="surface"
        clearable
        @keyup.esc="fieldSearch = ''"
      />
    </v-col>
    <v-col cols="12">
      <ClientList :filtered-clients="filteredClients" :is-loading="isLoading"/>
    </v-col>
  </v-container>
</template>

<script setup>
const allClients = ref([]);
const filteredClients = ref([]);
const fieldSearch = ref("");
const isLoading = ref(true)

//Retrieve client list from api endpoint
//store results in allClients for future reference and filteredClients for data initialization
//set loading to false to indicate app is ready for interaction
const getClients = async () => {
  const myData = await $fetch("http://localhost:3000/api/clients");
  allClients.value = myData || [];
  filteredClients.value = allClients.value;
  isLoading.value = false;
};

onMounted(getClients);

// Function to run when fieldSearch value is updated
// compares value of search against all properties in each client
// returns clients containing a property value that matches search string
watch(fieldSearch, async (newSearch) => {
  if (newSearch === "" || newSearch === null) {
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
