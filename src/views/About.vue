<template>
  <div class="about container py-4">
    <h1 class="text-danger">This is an about page</h1>
    <span v-if="user">
        <h2>{{user.name}}</h2>
        <h2>{{user.email}}</h2>
    </span>
    <h2 v-else >
      Your are not loged in
    </h2>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters(['user']),
  },
  mounted(){
    // this.$swal({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'success',
    //   button: "yes / ok",
    // })
    // Toast.fire({
    //   icon: 'success',
    //   title: 'Signed in successfully'
    // })
  }
}
</script>
