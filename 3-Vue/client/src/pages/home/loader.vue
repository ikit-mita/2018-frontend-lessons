<template>
  <div>
    <input v-model="color" />
    <loader v-bind:color="color" size="120px"></loader>
  </div>
</template>
<script>
  import '@/components/loader';

  export default {
    data() {
      return {
        color: 'red'
      }
    }
  }
</script>
