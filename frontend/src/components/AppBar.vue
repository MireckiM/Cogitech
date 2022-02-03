<template>
  <v-app-bar app color="green lighten-1" dark>
    <v-row>
      <v-col cols="4">
        <v-text-field
          class="ml-10"
          label="Szukaj postów autora"
          hide-details="auto"
          append-icon="mdi-account-search"
          background-color="green darken-2"
          rounded
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style>
</style>