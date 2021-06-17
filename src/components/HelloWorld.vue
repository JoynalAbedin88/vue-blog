<template>
  <div class="hello">
    <h1 class="text-warning">{{ msg }}</h1>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    this.getpost()
  },
  computed: {
    
  },
  methods: {
    getpost(){
      this.$http.get('http://learnvue.lol/api/posts')
      .then((response) => {
        console.log(response.data.posts)
        return response.data
      })
      .catch(() => {
        console.log('ghf')
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
