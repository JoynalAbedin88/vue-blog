<template lang="">
    <div>
        <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div class="col-md-6 card bg-white mt-3">
                    <div class="col-md-12 mt-4">
                        <form @submit.prevent="saveData()" id="login-form" class="form">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="name" class="text-info">Name</label><br>
                                <input v-model="form.name" type="text" id="name" :class="{'is-invalid' : form.errors.has('name')}" class="form-control" placeholder="name">
                                <small class="text-danger" v-if="form.errors.has('name')">{{ form.errors.get('name') }}</small>
                            </div>
                            <div class="form-group">
                                <label for="email" class="text-info">Email</label><br>
                                <input v-model="form.email" :class="{'is-invalid' : form.errors.has('email')}" type="email" id="email" class="form-control" placeholder="email">
                                <small class="text-danger" v-if="form.errors.has('email')">{{ form.errors.get('email') }}</small>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password</label><br>
                                <input v-model="form.password" :class="{'is-invalid' : form.errors.has('password')}" type="password" id="password" class="form-control" placeholder="password">
                                <small class="text-danger" v-if="form.errors.has('password')">{{ form.errors.get('password') }}</small>
                            </div>
                            <div class="form-group">
                                <label for="confirm-password" class="text-info">Confirm Password</label><br>
                                <input v-model="form.password_confirmation" type="password" id="confirm-password" class="form-control" placeholder="confirm password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-info btn-md">submit</button>
                            </div>
                            <div id="register-link" class="text-right form-group">
                                <router-link to="/login" class="text-info">Login</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>   
</template>
<script>
import { Form } from 'vform'
import axios from 'axios'
export default {
    data(){
        return{
            form: new Form({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            })
        }
    },
    methods: {
        saveData(){
            this.form.post('/register')
            .then(response => {
                localStorage.setItem('token', response.data.access_token)
                this.$store.dispatch('getUser', response.data.user)
                this.$router.push('/')
                this.$swal({
                  title: 'success!',
                  text: 'Yoy are loged in successfully',
                  icon: 'success',
                  button: "ok",
                })
            })
        }
    },
    async beforeCreate(){
        let user = await axios.get('/user').catch(() => {})
        if(user)
            this.$router.back()
    }
}
</script>