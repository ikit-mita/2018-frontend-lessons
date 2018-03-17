<template>
  <div>
    <div class="person-info" v-if="person">
      <span>name: {{ person.name }}</span>
      <span>hair_color: {{ person.hair_color }}</span>
      <span>skin_color: {{ person.skin_color }}</span>
      <span>eye_color: {{ person.eye_color }}</span>
      <span>gender: {{ person.gender }}</span>
    </div>
    <person-face v-if="person"
                 :eye-color="person.eye_color"
                 :hairColor="person.hair_color">
    </person-face>
    <span v-if="!person">Nothing to show</span>
  </div>
</template>

<script>
  import Vue from 'vue';
  import './person-face';
  export default Vue.component('person-view', {
    props: {
      person: Object
    }
  });
</script>

<style scoped>
  .person-info > span {
    display: block;
  }
</style>
