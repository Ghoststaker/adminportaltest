<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainInput />
  </div>
</template>

<script>
// @ is an alias to /src
import MainInput from '@/components/MainInput';

export default {
  name: 'home',
  components: {
    MainInput
  }
}

</script>
