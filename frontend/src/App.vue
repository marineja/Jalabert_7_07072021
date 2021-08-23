<template>
  <nav>
    <router-link to="/">Connection</router-link> |
    <router-link to="/Inscription">Inscription</router-link> 
  </nav>
 
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
  color: black;
}

.router-link-active {
  font-weight: bold;
  color: #9c40e7;
}

</style>
