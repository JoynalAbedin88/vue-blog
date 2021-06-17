<template>
  <div class="home">
     <div class="container">
       <div class="row" style="position:relative">
         <div class="col-md-9">
        <div class="card mb-3 my-3" v-for="post in posts" :key="post.id">
        <div class="row g-0">
          <div class="col-md-4">
            <img width="100%" :src="'http://learnvue.lol/'+post.image" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ post.name }}</h5>
              <p class="card-text">{{ post.description | substr(0, 200) }}</p>
              <p class="card-text">
                <small class="text-muted">Date: {{ post.created_at | setTime('date') }} | </small>
                <small class="text-muted">Author: {{ post.user.name }} | </small>
                <small class="text-muted">Comment: {{ post.comments.length + post.replies.length }} | </small>
                <small class="text-muted">{{ post.category.name }}</small>
                </p>
              
              <router-link :to="`/details/${post.id}`" class="btn py-1 px-3 btn-info">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="posts == ''" class="card mt-5 mx-auto col-md-9" style="max-width: 800px;">
          <h5 class="card-title p-4 m-0 text-center text-danger"> Opps.! Post Not Found</h5>
    </div>
      <div class="col-md-3 sidenav card mt-3">
        <a @click.prevent="getPosts()" href="">All</a>
        <a @click.prevent="searchByCategory(category.id)" v-for="category in categories" :key="category.id" href="">{{ category.name }} ({{ category.posts.length }})</a>
      </div>
  </div>

     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  mounted(){
    this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapGetters(['posts', 'categories']),
  },
  methods: {
    searchByCategory(id){
      this.$store.dispatch('getPosts', '?category_id='+ id)
    },
    getPosts(){
      this.$store.dispatch('getPosts', '')
    }
  },
}
</script>
