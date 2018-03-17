<template>
  <div>
    <input v-model="color" />
    <loader v-bind:color="color" size="200px"></loader>
    <person-face></person-face>
  </div>
</template>
<script>
  import '../components/loader';
  import '../components/person-face';
  export default {
    name: 'home',
    data() {
      return {
        color: 'red'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
