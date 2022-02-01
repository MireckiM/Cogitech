<template>
  <v-container>
    <v-row
      ><v-spacer></v-spacer>
      <div>
        <v-pagination
          color="green lighten-2"
          v-model="page"
          :length="10"
          :total-visible="5"
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
          <v-expansion-panel v-for="post in this.posts" v-bind:key="post.id">
            <v-expansion-panel-header
              v-on:click="getUser(post.userId)"
              class="mb-2 font-weight-medium"
            >
              {{ post.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
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
        </v-expansion-panels>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        //.then(json => console.log(json))
        .then((json_data) => (this.posts = json_data));
    },
    getUser(id) {
      fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then((response) => response.json())
        //.then(json => console.log(json))
        .then((json_data) => (this.user = json_data));
    },
  },
  created() {
    this.getPosts();
    //this.getUser();
  },
};
</script>
