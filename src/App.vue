<template>
  <div id="app" class="wrapper">
    <headerComponent/>
    <router-view/>
    <footerComponent/>
  </div>
</template>


<script>
import headerComponent from '@/views/Header.vue'
import footerComponent from '@/views/Footer.vue'
import axios from 'axios'

export default {
   components: {
    headerComponent,
    footerComponent,
  },
  
  async created(){
        let user = await axios.get('/user').catch(() => {})
        if(user)
          this.$store.dispatch('getUser', user.data)
      
        this.$store.dispatch('getPosts', '')
  },
}
</script>
<style>
  @import '~bootstrap/dist/css/bootstrap.css';
  body {
    margin: 0;
    padding: 0;
    background-color: #1da9c2;
    height: 100vh;

  }
  .swal-button--confirm{
    background:rgb(3, 122, 39);
  }
</style>
