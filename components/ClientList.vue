<template>
  <v-dialog max-width="500">
    <template #activator="{ props: activatorProps }">
      <v-list class="rounded-xl">
        <v-list-item
          v-for="(client, index) in filteredClients"
          v-bind="activatorProps"
          :id="'list-item-' + index"
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
</template>

<script setup>
import { useDisplay } from "vuetify";

const currentClient = ref(null);
const { xs: screenIsMobile } = useDisplay();

defineProps({
  filteredClients: { type: Array, default:()=>[] },
});

function loadData(myClient) {
  currentClient.value = myClient;
}
</script>
