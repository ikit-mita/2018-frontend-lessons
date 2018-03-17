<template>
  <div>
    <div v-if="!isLoading" class="buttons-panel">
      <!--option with event handling-->
      <button @click="goToPrev">&lt;prev</button>
      <!--option with router link-->
      <router-link :to="{ name: 'sw-viewer', params: { personId: nextPersonId }}" tag="button">next&gt;</router-link>
    </div>
    <person-view v-if="!isLoading" :person="person"></person-view>
    <loader v-if="isLoading" size="120px"></loader>
  </div>
</template>
<script>
  import '@/components/loader';
  import '@/components/person-view';
  import { PersonService } from '@/services/person-service';

  export default {
    data: function () {
      return {
        person: null,
        isLoading: false,
        personService: new PersonService()
      }
    },
    computed: {
      nextPersonId: function () { return this.getPersonId() + 1; }
    },
    created() {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchDataAsync()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchDataAsync'
    },
    methods: {
      getPersonId() { return parseInt(this.$route.params.personId || 1); },
      fetchDataAsync: async function () {
        this.isLoading = true;
        try {
          this.person = await this.personService.loadByIdAsync(this.getPersonId());
        } catch (err) {
          alert(err.message);
          throw err;
        } finally {
          this.isLoading = false;
        }
      },
      goToPrev: function () {
        console.log(11);
        this.$router.push({ name: 'sw-viewer', params: { personId: this.getPersonId() - 1 } });
      }
    }
  }
</script>

