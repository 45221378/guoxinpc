<template>
  <div id="wrapper">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    
    <Header/>
    <router-view/>
    <Footer/>

  </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'pc',
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped lang="scss">
  #wrapper{
    position: relative;
  }
</style>




