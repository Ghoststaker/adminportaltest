<template>
    <div class="mainbody">
        <h1>Login</h1>
        <div>
            <input id="username" type="text" placeholder="Username" v-model="username" required/>
        </div>
        <br>
        <div id="passwordArea">
            <input id="password" type="password" placeholder="Password" v-model="pass" required/>
        </div>
        <br>
        <br>
        <div>
            <button @click='login'>Login</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: "MainInput",
    data(){
        return{
            username: '',
            pass: '',
        }
    },

    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.username, this.pass).then(
                (user) => {
                    this.$router.replace('dashboard')
                    this.newuser = firebase.auth().currentUser.email;
                },
                (err) => {
                    alert('Something went wrong. ' + err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
    .mainbody{
        text-align:center;
    }

    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 10px 0;
        width: 10%;
        padding: 15px;
        cursor: pointer;
    }

</style>


