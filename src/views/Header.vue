<template lang="">
    <div>

        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/">Logo</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item mx-2">
                            <router-link to="/">Home</router-link>
                        </li>
                        
                        <li class="nav-item mx-2">
                            <router-link to="/about">About</router-link> 
                        </li>
                        <li v-if="user" class="nav-item mx-2">
                            <a href="#" @click.prevent="logout()">Logout</a> 
                        </li>
                            <li v-if="!user" class="nav-item mx-2">
                                <router-link to="/login">Login</router-link> 
                            </li>
                            <li v-if="!user" class="nav-item mx-2">
                                <router-link to="/register">Register</router-link> 
                            </li>
                    </ul>

                    <form class="d-flex ml-auto">
                        <input v-model="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button @click.prevent="searchPosts()" class="btn ml-2 btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            search: '',
        }
    },
    methods: {
        searchPosts() {
            this.$store.dispatch('getPosts', '?s='+this.search)
            this.$router.push('/').catch(()=>{})
        },
        logout(){
            localStorage.removeItem('token')
            this.$store.dispatch('getUser', null)
            this.$router.push('/').catch(() => {})
        }
    },
    computed:{
        ...mapGetters(['user']),
    }
}
</script>