<template lang="">
    <div>
        <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div class="col-md-6 card bg-white mt-3">
                    <div class="col-md-12 mt-4">
                        <form id="login-form" class="form">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text" v-model="login.email" id="username" class="form-control" :class="{ 'is-invalid': login.errors.has('email') }" placeholder="email ...">
                                <small class="text-danger" v-if="login.errors.has('email')">{{ login.errors.get('email') }}</small>
                                <small class="text-danger" v-if="message">{{ message }}</small>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="text" v-model="login.password" id="password" class="form-control" :class="{ 'is-invalid': login.errors.has('password') }" placeholder="password...">
                                <small class="text-danger" v-if="login.errors.has('password')">{{ login.errors.get('password') }}</small>
                            </div>
                            <div class="form-group">
                                <button @click.prevent="userLogin()" class="btn btn-info btn-md">submit</button>
                            </div>
                            <div id="register-link" class="text-right form-group">
                                <router-link to="/register" class="text-info">Register here</router-link>
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
    name: 'Login',
    data(){
        return {
            login: new Form({
                email: '',
                password: '',
            }),
            message: ''
        }
    },
    methods: {
        userLogin(){
            this.login.post('/login')
            .then(response => {
                localStorage.setItem('token', response.data.access_token)
                this.$store.dispatch('getUser', response.data.user)
                if(response.data.message){
                    this.message = response.data.message
                }else{
                    this.$router.push('/')
                    this.$swal({
                      title: 'success!',
                      text: 'Yoy are loged in successfully',
                      icon: 'success',
                      button: "ok",
                    })
                }
                
            })
        }
    },
    async beforeCreate(){
        let user = await axios.get('/user').catch(() => {})
        if(user)
            this.$router.back()
    },
}
</script>
