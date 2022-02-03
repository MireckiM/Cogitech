const state = {
    posts: [],
    users: [],
};

const getters = {
    allPosts: state => state.posts,
    allUsers: state => state.users,
};

const actions = {
    async getPosts({commit}) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json());
        commit('setPosts',response);
    },
    async getUsers({commit}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json());
        commit('setUsers',response);
    },

    async deletePost({commit}, id) {
        await delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        commit('deletePost',id);
    },
    filterPosts({commit}, e){
        commit == 1,
        console.log(e);
    },
};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts),
    setUsers: (state, users) => (state.users = users),
    deletePost: (state, id) => state.posts = state.posts.filter(post => post.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations,
}