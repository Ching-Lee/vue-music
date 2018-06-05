<template>
  <div id="app">
    <main-header></main-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from './components/m_header/m_header.vue'
import Tab from './components/tab/tab.vue'
export default {
  components: {
    'main-header': MHeader,
    'tab': Tab
  }
}
</script>

<style>
  @import "./assets/css/reset-min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
