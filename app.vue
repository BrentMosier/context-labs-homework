<template>
  <v-app>
    <v-container>
      <v-col cols="12">
        <v-text-field
          label="Search"
          prepend-inner-icon="mdi-magnify"
          type="input"
          variant="solo"
          v-model="fieldSearch"
          rounded="xl"
        />
      </v-col>
      <v-col cols="12">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-list class="rounded-xl">
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
                <v-list-item-subtitle
                  v-text="client.title"
                ></v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card rounded="xl">
              <template v-slot:prepend>
                <v-avatar size="128">
                  <v-img alt="avatar" :src="currentClient.avatar" />
                </v-avatar>
              </template>
              <template v-slot:title v-if="!screenIsMobile">
                <span v-html="currentClient.name"></span>
              </template>
              <template v-slot:subtitle v-if="!screenIsMobile">
                {{ currentClient.title }}
              </template>
              <template v-slot:append v-if="currentClient.nationality">
                <CountryFlag :nationality="currentClient.nationality" />
              </template>
              <v-card-text v-if="screenIsMobile">
                <span class="text-h6" v-html="currentClient.name"></span>
                <p class="text-subtitle-2 text-medium-emphasis">{{ currentClient.title }}</p>
              </v-card-text>
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
import { useDisplay } from "vuetify";
const allClients = ref([]);
const filteredClients = ref([]);

const currentClient = ref(null);
const fieldSearch = ref("");

const { xs: screenIsMobile } = useDisplay();

const getClients = async () => {
  const myData = await $fetch("/api/clients");
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
      for (let attribute in client) {
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
