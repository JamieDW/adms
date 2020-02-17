<template>
  <div class="container mx-auto">

      <select v-model.number="limit" @change="fetchCars()">
        <option value=15>15</option>
        <option value=50>50</option>
        <option value=100>100</option>
      </select>

      <select v-model="orderBy" @change="fetchCars()">
        <option value="-date">Most recent</option>
        <option value="price">Price (Lowest)</option>
        <option value="-price">Price (Highest)</option>
        <option value="-year">Age (Newest first)</option>
        <option value="miles">Mileage</option>
      </select>

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
    title:        window.config.appName,
    pagination:   {},
    orderBy:      '-date',
    limit:        15
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

      this.pagination = await Car
        .orderBy(this.orderBy)
        .page(pageNumber)
        .limit(this.limit)
        .get()
    }
  },


}
</script>
