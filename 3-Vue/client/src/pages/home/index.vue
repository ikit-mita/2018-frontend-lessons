<template>
  <div>
    <p>^^^ use link above ^^^</p>
    <img src="@/assets/logo.png">
    <router-view />
  </div>
</template>
<script>
  import '@/components/loader';
  import '@/components/person-face';
  export default {
    data() {
      return {
        color: 'red'
      }
    }
  }
</script>
