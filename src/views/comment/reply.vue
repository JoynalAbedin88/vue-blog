<template lang="">
    <div>
        <div v-for="reply in replies" :key="reply.id" class="media mt-4"> 
            <a class="pr-3" href="#">
            <!-- <img class="rounded-circle" alt="Bootstrap Media Another Preview" src="" /> -->
             <span class="img">{{ reply.user.name | substr(0, 1) }}</span>
            </a>
            <div class="media-body">
                <div class="row">
                    <div class="col-12 d-flex">
                        <h5>{{ reply.user.name }}</h5> <span>- {{ reply.created_at | setTime('hours') }}</span>
                    </div>
                </div> 
                <p>{{ reply.comment }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['replies'],
}
</script>
<style lang="">
    
</style>