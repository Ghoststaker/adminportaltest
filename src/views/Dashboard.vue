<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
        <h2 id="welcome">Welcome</h2>
        <button @click='logout'>Logout</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Dashboard",

    methods: {
        logout: function() {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('/')
                });
        }
    },

    mounted: function() {
        document.getElementById('welcome').innerHTML = "Welcome " + firebase.auth().currentUser.email;
    }
}


</script>

<style scoped>

</style>


