<template lang="">
    <div>
        <div class="card mb-5">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="text-center mb-5">Comment section </h3>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="media" v-for="comment in comments" :key="comment.id">
                                        <!-- <img class="mr-3 rounded-circle" alt="Bootstrap Media Preview" src="" /> -->
                                        <span class="img">{{ comment.user.name | substr(0, 1) }}</span>
                                        <div class="media-body">
                                            <div class="row">
                                                <div class="col-8 d-flex">
                                                    <h5>{{ comment.user.name }} </h5> 
                                                    <span>- {{ comment.created_at | setTime('hours') }}</span>
                                                </div>
                                                <div class="col-4">
                                                    <div class="pull-right reply"> <a @click.prevent="replyform(comment.id)" href="#"><span><i class="fa fa-reply"></i> reply</span></a> </div>
                                                </div>
                                            </div>
                                            <p>{{ comment.comment }}</p> 

                                            <reply :replies="comment.reply" />
                                            
                                            <div v-if="form && comment.id == id && user">
                                                <div class="col-10 mt-4 mb-5">
                                                     <commentForm :postId="postId" :commentId=" comment.id"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 mt-5" v-if="user">
                            <commentForm :postId="postId" :commentId="null"/>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import commentForm from './form.vue'
import reply from './reply.vue'
export default {
    props:['postId'],
    components:{
        commentForm,
        reply,
    },
    data(){
        return{
            form: false,
            id: '',
            replyForm: new Form({
                reply: '',
                post_id: this.postId,
                comment_id: '',
            }),
        }
    },
    mounted(){
        this.$store.dispatch('getComments', this.postId)
    },
    computed:{
        ...mapGetters(['comments', 'user'])
    },
    methods: {
        replyform(id){
            this.replyForm.reply = ''
            if(this.form == false){
                this.form = true,
                this.id = id
            }
            else{
                this.form = false
                this.id = ''
            }
        }
    },
}
</script>
<style>
.img{
    background: rgb(183, 1, 255);
    border-radius: 50%;
    text-align: center;
    padding: 10px 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    margin-right: 10px;
}

.card {
    position: relative;
    display: flex;
    padding: 20px;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #d2d2dc;
    border-radius: 11px;
    -webkit-box-shadow: 0px 0px 5px 0px rgb(249, 249, 250);
    -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
    box-shadow: 0px 0px 5px 0px rgb(161, 163, 164)
}

.media img {
    width: 60px;
    height: 60px
}

.reply a {
    text-decoration: none
}
</style>