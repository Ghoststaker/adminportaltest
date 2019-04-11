<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MainInput />
  </div>
</template>

<script>
import MainInput from './components/MainInput';

export default {
  name: 'app',
  components: {
    MainInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
