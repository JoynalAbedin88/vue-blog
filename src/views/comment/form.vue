<template lang="">
    <div>
        <form @submit.prevent="submitComment()">
            <label for="comment">Your Comment</label>
            <div class="form-group">
                <textarea v-model="commetnForm.comment" id="comment" class="form-control" :class="{'is-invalid' : commetnForm.errors.has('comment')}" placeholder="Comment here..."></textarea>
                <small class="text-danger" v-if="commetnForm.errors.has('comment')">{{ commetnForm.errors.get('comment') }}</small>
            </div>
            <button type="submit" class="btn btn-info">Comment</button>
        </form>
    </div>
</template>
<script>
import Form from 'vform';
export default {
    props:['postId', 'commentId'],
    data(){
        return{
            commetnForm: new Form({
                comment: '',
                post_id: this.postId,
                comment_id: '',
            }),
            route:'',
        }
    },
    methods: {
        submitComment(){
            if(this.commentId){
                this.commetnForm.comment_id = this.commentId
                this.route = '/reply/store'
            }else{
                this.route = '/comment/store'
            }
            this.commetnForm.post(this.route)
            .then(()=>{
                this.commetnForm.comment = ''
                this.$store.dispatch('getComments', this.$route.params.id)
            })
        },
    },
};
</script>
<style lang="">
</style>