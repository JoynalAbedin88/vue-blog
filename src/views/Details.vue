<template lang="">
    <div>
        <div class="container mb-5 mt-5">
            <div class="card mb-3">
                <img style="width: 50% !important;" :src="post.hostname + post.image" class="card-img-top mx-auto mt-3">
                <div class="card-body">
                    <p class="card-text">
                        <small class="text-muted">{{ post.created_at | setTime('date') }} | </small>
                        <!-- <small class="text-muted">{{ post.user.name }} | </small> -->
                        <small class="text-muted">Comment: {{ comments.length }} | </small>
                        <!-- <small class="text-muted">{{ post.category.name }}</small> -->
                    </p>
                    <h5 class="card-title">{{post.name}}</h5>
                    <p class="card-text">{{ post.description }}</p>
                </div>
            </div>
                <comments :postId="this.$route.params.id" />
            </div>
    </div>
</template>
<script>
import comments from '../views/comment/comment.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Details',
    components:{
        comments,
    },
    mounted(){
        this.$store.dispatch('getPost', this.$route.params.id)
    },
    computed: {
        ...mapGetters(['post', 'comments'])

    },

}
</script>
