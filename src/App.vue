// eslint-disable-next-line
<template>
<div class="divide">
<Header />
<div class="content">


  
  <router-view />

</div>
<Footer />
</div>

</template>

<style scoped>
@import './assets/style.css';
div.divide{
  display: flex;
  height: 100vh;         
  
  flex-direction: column;
}
</style>
<script>
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
};

</script>