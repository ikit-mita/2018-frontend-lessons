<template>
  <div class="loader" :style="{ 'border-color': bgColor, 'border-top-color': color,width: size, height: size }"></div>
</template>

<script>
  import Vue from 'vue';
  export default Vue.component('loader', {
    props: {
      color: String,
      bgColor: {
        type: String,
        default: '#f3f3f3'
      },
      size: {
        type: String,
        default: '120px'
      }
    }
  });
</script>

<style scoped>
  .loader {
    border-width: 16px;
    border-style: solid;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
