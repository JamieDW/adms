<template>
  <div class="container mx-auto">

    <v-select :options="limits" />

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
import List from '../models/list'

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('welcome') }
  },

  data: () => ({
    title:        window.config.appName,
    pagination:   {},
    orderBy:      '-date',
    limits:        [],
    limit: 3
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {

    this.limits = this.getList("local", "page_limits");

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
    },
    async getList (type, name) {

      // List
      //   .where("type", type)
      //   .where("name", name)
      //   .get()
      //   .then(response => {
      //     debugger;
      //     return response;
      //   });

      return await List
        .where("type", type)
        .where("name", name)
        .get()
    },
  },


}
</script>
