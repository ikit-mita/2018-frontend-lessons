<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/sw">Star Wars Viewer</router-link> </li>
      </ul>
    </nav>
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
  import './components/person-face'
  export default {
    name: 'App'
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #DDFFF7;
    margin-top: 10px;
  }

  .buttons-panel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }
</style>
