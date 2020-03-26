<template>
  <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
    <search-filters :filters="filter" v-on:update-results="onUpdate"/>
    <main class="flex flex-wrap py-6 overflow-auto xl:flex-1">
      <vehicle-card v-for="car in cars" :car="car" :key="car.id"/>
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
        <span slot="spinner"></span>
        <span slot="no-more"></span>
        <span slot="no-results"></span>
      </infinite-loading>
    </main>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import car from '../models/car'
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';

export default {
  layout: 'default',

  components: {
    InfiniteLoading,
  },

  metaInfo () {
    return { title: this.$t('welcome') }
  },

  data: () => ({
    title     : window.config.appName,
    page      : 1,
    cars      : [],
    infiniteId: +new Date(),
    filter: {
      orderBy: '-date',
      limit  : 15,
      make   : null,
      model  : null
    },
  }),
  // TODO add null option to selects and display it.
  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {
      this.filter.orderBy = this.$storage.get('orderBy', this.filter.orderBy)
      this.filter.make    = this.$storage.get('make', this.filter.make)
      this.filter.model   = this.$storage.get('model', this.filter.model)
  },

  mounted() { },

  methods: {
    onUpdate(filter) {
      this.filter = filter
      this.page = 1;
      this.cars = [];
      this.infiniteId += 1;
    },
    infiniteHandler($state) {
      let vue = this;

      let query = car
        .orderBy(this.orderBy)
        .page(this.page)
        .limit(Number(this.filter.limit))

      if(this.filter.make) {
        if(this.filter.model) {
          query.whereIn('identity', [this.filter.make, this.filter.model])
        }
        else {
          query.where('identity', this.filter.make)
        }
      }

      query
        .get()
        .then(response => {
            if (response.data.length) {
              vue.page += 1;
              vue.cars.push(...response.data);
              $state.loaded();
            } else {
              $state.complete();
            }
        })

    },
  }
}
</script>
