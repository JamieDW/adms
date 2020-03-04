<template>
  <div class="container mx-auto">
      <search-filters :filters="filter" v-on:update-results="onUpdate"/>

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
    filter: {
      orderBy   : '-date',
      limit     : 15,
      make      : null,
      model     : null
    },
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {

      this.filter.limit   = this.$storage.get('limit', this.filter.limit)
      this.filter.orderBy = this.$storage.get('orderBy', this.filter.orderBy)
      this.filter.make    = this.$storage.get('make', this.filter.make)
      this.filter.model   = this.$storage.get('model', this.filter.model)

    this.getCars();
  },

  mounted() { },

  methods: {
    onUpdate(filter) {
      this.filter = filter
      this.getCars();
    },
    async getCars () {

      let pageNumber = this.pagination.current_page || 1

      let query = car
        .orderBy(this.orderBy)
        .page(pageNumber)
        .limit(Number(this.filter.limit))

      if(this.filter.make) {
        if(this.filter.model) {
          query.whereIn('identity', [this.filter.make, this.filter.model])
        }
        else {
          query.where('identity', this.filter.make)
        }

      }

      this.pagination = await query.get()

    },
  }
}
</script>
