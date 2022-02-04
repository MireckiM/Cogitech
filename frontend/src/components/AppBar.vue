<template>
  <v-app-bar app color="purple lighten-1" dark>
    <v-row>
      <v-col xl="4" lg="4" md="4" sm="6" xs="8">
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
          item-color="purple"
        ></v-select>
      </v-col>
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