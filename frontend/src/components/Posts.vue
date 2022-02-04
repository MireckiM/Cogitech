<template>
  <v-container>
    <v-row>
      <v-col></v-col
      ><v-col xl="6" lg="6" md="6" sm="12" xs="12">
        <div @click="readmore == false">
          <v-pagination
            color="purple lighten-1"
            v-model="page"
            :length="Math.ceil(this.allPosts.length / 10)"
            :total-visible="6"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            class="pa-md-6 mx-lg-auto"
            value="3"
          ></v-pagination>
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row
      ><v-col class="hidden-sm-and-down" xl="3" md="3"></v-col>
      <v-col xl="6" lg="6" md="6" sm="12" xs="12">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="post in allPosts.slice((this.page - 1) * 10, this.page * 10)"
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
              <v-row>
                <p class="my-4 ml-2 caption font-weight-black">
                  ~ {{ user.name }}
                </p>
                <v-spacer></v-spacer
                ><v-icon
                  @click="deletePost(post.id)"
                  medium
                  color="red darken-1"
                  class="mr-2"
                  >mdi-delete-variant</v-icon
                ><v-col class="hidden-sm-and-down" xl="3" md="3"></v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Posts",

  data() {
    return {
      user: {},
      page: 1,
      readmore: false,
    };
  },
  methods: {
    ...mapActions(["getPosts", "getUsers", "deletePost", "filterPosts"]),

    getUser(id) {
      fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then((response) => response.json())
        .then((json_data) => (this.user = json_data));
    },
  },
  computed: mapGetters(["allPosts", "allUsers"]),

  watch: {
    allPosts: function () {
      if (this.allPosts.length <= 15) {
        this.page = this.page * (1 / this.page);
      }
    },
  },

  created() {
    this.getPosts();
    this.getUsers();
  },
};
</script>
