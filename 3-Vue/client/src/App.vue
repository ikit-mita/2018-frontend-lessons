<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link :to="{name:'main'}">Home</router-link>
          <ul>
            <li>
              <router-link :to="{name:'main.loader'}">Loader</router-link>
            </li>
          </ul>
        </li>
        <li><router-link :to="{name:'sw-viewer'}">Star Wars Viewer</router-link> </li>
      </ul>
    </nav>
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

  .router-link-active {
    font-weight: bold;
  }

  .buttons-panel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }
</style>
