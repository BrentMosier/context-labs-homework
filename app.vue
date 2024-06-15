<template>
  <v-app>
    <v-container >
      <v-col cols="12">
    <v-text-field
      label="Search"
      prepend-inner-icon="mdi-magnify"
      type="input"
      single-line=""
      v-model="fieldSearch"
    />
  </v-col>
  <v-col cols="12">
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-list>
          <v-list-item
            v-for="(client, index) in filteredClients"
            v-bind="activatorProps"
            :key="index"
            :value="client"
            :prepend-avatar="client.avatar"
            @click="loadData(client)"
          >
            <v-list-item-title>
              <span v-html="client.name"></span>
            </v-list-item-title>
            <v-list-item-subtitle v-text="client.title"></v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <template v-slot:prepend>
            <v-avatar size="128">
              <v-img alt="avatar" :src="currentClient.avatar" />
            </v-avatar>
          </template>
          <template v-slot:title>
            <span v-html="currentClient.name"></span>
          </template>
          <template v-slot:subtitle>
            {{ currentClient.title }}
          </template>
          <template v-slot:append v-if="currentClient.nationality">
            <CountryFlag :nationality="currentClient.nationality"/>
          </template>
          <v-card-text v-if="currentClient.quote" class="text-caption"
            >"{{ currentClient.quote }}"</v-card-text
          >
        </v-card>
      </template>
    </v-dialog>
  </v-col>
  </v-container>
  </v-app>
  
</template>

<script setup>
// const { data: myData } = await useFetch("/api/clients")
const allClients = ref([]);
let currentClient = ref(null);
const fieldSearch = ref("");
const filteredClients = ref([]);

const getClients = async () => {
  //update useFetch to not get console warning
  const { data: myData } = await useFetch("/api/clients");
  allClients.value = myData.value?.userData || [];
  filteredClients.value = allClients.value;
};

function loadData(myClient) {
  currentClient = myClient;
}

onMounted(getClients);

watch(fieldSearch, async (newSearch) => {
  if (newSearch === "") {
    filteredClients.value = allClients.value;
  } else {
    filteredClients.value = [];
    allClients.value.forEach((client) => {
      let clientSelectable = false;
      for (let attribute in client) {
        typeof client[attribute] == "string" &&
        client[attribute].toLowerCase().includes(newSearch.toLowerCase())
          ? (clientSelectable = true)
          : null;
      }
      if (clientSelectable) {
        filteredClients.value.push(client);
      }
    });
  }
});
</script>
