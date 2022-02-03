<template>
  <v-app-bar app color="purple lighten-1" dark>
    <v-row>
      <v-col cols="4">
        <v-select
          @change="filterPosts($event)"
          :items="this.allUsers"
          item-text="name"
          item-value="name"
          return-object
          class="ml-5 mt-5"
          label="Szukaj postów autora"
          append-icon="mdi-account-search"
          background-color="purple darken-2"
          rounded
          clearable
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppBar",

  methods: mapActions(["filterPosts", "getUsers"]),

  computed: mapGetters(["allUsers"]),

  created() {
    this.getUsers();
  },
};
</script>

<style>
</style>