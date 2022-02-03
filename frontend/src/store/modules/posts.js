const state = {
    posts: []
};

const getters = {
    allPosts: state => state.posts
};

const actions = {
    async getPosts({commit}) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json());
        commit('setPosts',response);
    },

    async deletePost({commit}, id) {
        await delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        commit('deletePost',id);
    }
};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts),
    deletePost: (state, id) => state.posts = state.posts.filter(post => post.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations,
}