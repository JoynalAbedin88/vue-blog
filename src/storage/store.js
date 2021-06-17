import axios from "axios"

export default {
    state: {
        posts: [],
        post: [],
        comments: [],
        categories: [],
        user: null,
    },
    getters: {
        posts(state) {
            return state.posts
        },
        post(state) {
            return state.post
        },
        comments(state) {
            return state.comments
        },
        categories(state) {
            return state.categories
        },
        user(state) {
            return state.user
        }
    },
    actions: {
        getPosts(context, value) { // Action for all post
            axios.get('http://learnvue.lol/api/posts' + value)
                .then(response => {
                    context.commit('postsCommit', response.data.posts)
                })
        },
        getPost(context, id) { // Action for Single post
            axios.get(`http://learnvue.lol/api/details/${id}`)
                .then((response) => {
                    context.commit('postCommit', response.data.post)
                })
        },
        getComments(context, id) {
            axios.get(`http://learnvue.lol/api/comments/${id}`)
                .then((response) => {
                    context.commit('commentCommit', response.data.comments)
                })
        },
        getCategories(context) {
            axios.get('http://learnvue.lol/api/categories')
                .then((response) => {
                    context.commit('categoriesCommit', response.data.category)
                })
        },
        getUser(context, user) {
            context.commit('userCommit', user)
        }
    },
    mutations: {
        postsCommit(state, data) {
            return state.posts = data
        },
        postCommit(state, data) {
            return state.post = data
        },
        commentCommit(state, data) {
            return state.comments = data
        },
        categoriesCommit(state, data) {
            return state.categories = data
        },
        userCommit(state, data) {
            return state.user = data
        }
    }
}