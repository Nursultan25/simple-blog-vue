<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap');
#app {
  margin: 0 auto;
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Header}
}
</script>