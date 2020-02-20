<template>
  <div class="container mx-auto">

      <v-select
        @change="onLimitChanged"
        v-model="limit"
        :options="limits">
        Limit</v-select>

      <v-select
        @change="onOrderByChanged"
        v-model="orderBy"
        :options="orderBys"
      >Order</v-select>

      <vehicle-card v-for="car in pagination.data" :car="car" :key="car.id"/>

      <pagination :pagination="pagination" @paginate="getCars"/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import car from '../models/car'
import axios from 'axios'

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('welcome') }
  },

  data: () => ({
    title     : window.config.appName,
    pagination: {},
    limits    : [],
    orderBys  : [],
    orderBy   : '-date',
    limit     : 15
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {

    this.initDefaults();

  },

  mounted() {



  },

  watch:{
    limit(newLimit) {
      this.$storage.set('limit', newLimit)
    },
    orderBy(newOrderBy) {
      this.$storage.set('orderBy', newOrderBy)
    },
  },

  methods: {
    async initDefaults() {

      this.limit =  this.$storage.get('limit', this.limit)
      this.orderBy = this.$storage.get('orderBy', this.orderBy)

      this.limits = await this.$storage.remember('limits', async () => { return this.getList("local", "limits"); })
      this.orderBys = await this.$storage.remember('order_bys', async () => { return this.getList("local", "order_bys"); })

      this.getCars();
    },
    async getCars () {

      let pageNumber = this.pagination.current_page || 1

      this.pagination = await car
        .orderBy(this.orderBy)
        .page(pageNumber)
        .limit(Number(this.limit))
        .get()
    },
    async getList (type, name) {
      return axios
        .get("api/lists?filter[type]=" + type + "&filter[name]=" + name)
        .then ( function (response) {
          return response.data;
        })
    },
    onLimitChanged (value) {
      this.limit = value
      this.getCars();
    },
    onOrderByChanged (value) {
      this.orderBy = value
      this.getCars();
    }
  },


}
</script>
