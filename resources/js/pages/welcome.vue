<template>
  <div class="container mx-auto">
      <search-filters v-on:update-results="onUpdate"/>

      <div class="flex flex-wrap">
        <vehicle-card v-for="car in pagination.data" :car="car" :key="car.id"/>
      </div>

      <pagination :pagination="pagination" @paginate="getCars"/>

  </div>


</template>

<script>

import { mapGetters } from 'vuex'
import car from '../models/car'




export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('welcome') }
  },

  data: () => ({
    title     : window.config.appName,
    pagination: {},
    filter    : {}
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {
    this.getCars();
  },

  mounted() { },

  methods: {
    onUpdate(filter) {
      debugger;
      this.filter = filter
    },
    async getCars () {

      let pageNumber = this.pagination.current_page || 1

      let query = car
        .orderBy(this.orderBy)
        .page(pageNumber)
        .limit(Number(this.limit))

      if(this.make) {
        if(this.model) {
          query.whereIn('identity', [this.make, this.model])
        }
        else {
          query.where('identity', this.make)
        }

      }

      this.pagination = await query.get()

    },
  }
}
</script>
