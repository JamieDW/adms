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

import Car from '../models/car'

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

    if (localStorage.limit) {
      this.limit = localStorage.limit;
    }
    if (localStorage.orderBy) {
      this.orderBy = localStorage.orderBy;
    }

    this.getList("local", "limits").then(result => this.limits = result)
    this.getList("local", "order_bys").then(result => this.orderBys = result)

    this.getCars();


  },

  mounted() {

  },

  watch:{
    limit(newLimit) {
      localStorage.limit = newLimit;
    },
    orderBy(newOrderBy) {
      localStorage.orderBy = newOrderBy;
    },
  },

  methods: {
    async getCars () {

      let pageNumber = this.pagination.current_page || 1

      this.pagination = await Car
        .orderBy(this.orderBy)
        .page(pageNumber)
        .limit(this.limit)
        .get()
    },
    async getList (type, name) {

      return axios
        .get("api/lists?filter[type]=" + type + "&filter[name]=" + name)
        .then ( function (response){
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
