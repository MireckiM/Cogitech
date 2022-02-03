<template>
  <v-container>
    <v-row
      ><v-spacer></v-spacer>
      <div
        v-on:click="
          getPosts();
          readmore == false;
        "
      >
        <v-pagination
          color="purple lighten-1"
          v-model="page"
          :length="10"
          :total-visible="7"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          class="pa-md-6 mx-lg-auto"
        ></v-pagination>
      </div>
      <v-spacer></v-spacer
    ></v-row>
    <v-row
      ><v-col cols="3"></v-col
      ><v-col>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="post in allPosts"
            v-bind:key="post.id"
            class="elevation-2"
          >
            <v-expansion-panel-header
              v-on:click="getUser(post.userId)"
              class="mb-2 font-weight-medium"
            >
              {{ post.id }}. {{ post.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="font-weight-light">
              {{ post.body }}
              <br />
              <v-row>
                <p class="my-4 ml-2 caption font-weight-black">~ {{ user.name }}</p>
                <v-spacer></v-spacer
                ><v-icon @click="deletePost(post.id)" medium color="red darken-1" class="mr-2"
                  >mdi-delete-variant</v-icon
                >
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!--<v-expansion-panels>
          <v-expansion-panel
            v-for="post in this.posts"
            v-bind:key="post.id"
            class="elevation-2"
          >
            <v-expansion-panel-header
              v-on:click="getUser(post.userId)"
              class="mb-2 font-weight-medium"
            >
              {{ post.id }}. {{ post.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="font-weight-light">
              {{ post.body }}
              <br />
              <v-row
                ><v-spacer></v-spacer>
                <p class="my-4 caption font-weight-black">
                  ~ {{ user.name }}
                </p></v-row
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>-->
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Posts",

  data() {
    return {
      posts: {},
      user: {},
      page: 1,
      pages: 10,
      readmore: false,
    };
  },
  methods: {
    ...mapActions(["getPosts", "getUsers","deletePost"]),
    /*getPosts() {
      fetch(
        "https://jsonplaceholder.typicode.com/posts?_start=" +
          ((this.page - 1)*10) +
          "&_limit=10"
      )
        .then((response) => response.json())
        .then((json_data) => (this.posts = json_data));
    },*/
    getUser(id) {
      fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then((response) => response.json())
        //.then(json => console.log(json))
        .then((json_data) => (this.user = json_data));
    },
  },
  computed: mapGetters(["allPosts"]),
  created() {
    this.getPosts();
    this.getUsers();
  },
};
</script>
