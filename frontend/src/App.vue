<template>
  <v-app>
    <v-container>
      <AppBar />
      <v-main>
        <Posts />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Posts from "./components/Posts";
import AppBar from "./components/AppBar";

export default {
  name: "App",

  components: {
    Posts,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
