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
      <v-dialog max-width="500">
        <template #activator="{ props: activatorProps }">
          <v-list class="rounded-xl">
            <v-list-item
              v-for="(client, index) in filteredClients"
              v-bind="activatorProps"
              :key="index"
              :value="client"
              :prepend-avatar="client.avatar"
              :subtitle="client.title"
              @click="loadData(client)"
            >
              <template #title>
                <span v-dompurify-html="client.name" />
              </template>
            </v-list-item>
          </v-list>
        </template>
        <template #default>
          <v-card rounded="xl">
            <template #prepend>
              <v-avatar size="128">
                <v-img alt="avatar" :src="currentClient.avatar" />
              </v-avatar>
            </template>
            <template v-if="!screenIsMobile" #title>
              <span v-dompurify-html="currentClient.name" />
            </template>
            <template v-if="!screenIsMobile" #subtitle>
              {{ currentClient.title }}
            </template>
            <template v-if="currentClient.nationality" #append>
              <CountryFlagDisplay :nationality="currentClient.nationality" />
            </template>
            <v-card-text v-if="screenIsMobile">
              <span v-dompurify-html="currentClient.name" class="text-h6" />
              <p class="text-subtitle-2 text-medium-emphasis">
                {{ currentClient.title }}
              </p>
            </v-card-text>
            <v-card-text v-if="currentClient.quote" class="text-caption"
              >"{{ currentClient.quote }}"</v-card-text
            >
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";

const allClients = ref([]);
const filteredClients = ref([]);

const currentClient = ref(null);
const fieldSearch = ref("");

const { xs: screenIsMobile } = useDisplay();

const getClients = async () => {
  const myData = await $fetch("http://localhost:3000/api/clients");
  allClients.value = myData || [];
  filteredClients.value = allClients.value;
};

function loadData(myClient) {
  currentClient.value = myClient;
}

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
