<template>
  <div class="container mx-auto">
      <vehicle-card v-for="car in cars" :car="car" :key="car.id"/>

      <pagination :pagination="pagination" @paginate="fetchCars" :offset="4"/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('welcome') }
  },

  data: () => ({
    title: window.config.appName,
    offset: 4,
    pagination: {},
    cars: [],
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {
    this.fetchCars();
  },

  methods: {
    async fetchCars () {

      let current_page = this.pagination.current_page;
      let pageNum = current_page ? current_page : 1;

      let vue = this;

      await axios.get(`/api/cars?page=${pageNum}`)
      .then((response) => {
        vue.pagination = response.data;
        vue.cars = response.data.data;
      }).catch((e) => {

      });
    }
  },


}
</script>
