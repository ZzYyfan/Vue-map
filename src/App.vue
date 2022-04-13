<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <mapTest/>
    <mapEl/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import mapTest from './components/mapTest.vue'
import mapEl from './components/mapEl.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    mapTest,
    mapEl
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
