<template>
  <div class="container mx-auto">
      <vehicle-card v-for="car in pagination.data" :car="car" :key="car.id"/>

      <pagination :pagination="pagination" @paginate="fetchCars" :offset="4"/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import Car from '../models/car'

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('welcome') }
  },

  data: () => ({
    title: window.config.appName,
    pagination: {},
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {
    this.fetchCars();
  },

  methods: {
    async fetchCars () {

      let pageNumber = this.pagination.current_page || 1;

      this.pagination = await Car.page(pageNumber).limit(3).get()
    }
  },


}
</script>
