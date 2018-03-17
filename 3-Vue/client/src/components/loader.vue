<template>
  <div class="loader" :style="style"></div>
</template>

<script>
  import Vue from 'vue';
  export default Vue.component('loader', {
    props: {
      color: {
        type: String,
        default: '#3498db'
      },
      bgColor: {
        type: String,
        default: '#f3f3f3'
      },
      size: {
        type: String,
        default: '120px'
      }
    },
    computed: {
      style: function() {
        return {
          'border-color': this.bgColor,
          'border-top-color': this.color,
          width: this.size,
          height: this.size
        };
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
