<template>
  <div class="container mx-auto">
      <v-select @change="onMakeChanged" v-model="make" :options="makes">Make</v-select>
      <v-select @change="onModelChanged" v-model="model" :options="models">Model</v-select>

      <v-select @change="onLimitChanged" v-model="limit" :options="limits">Limit</v-select>
      <v-select @change="onOrderByChanged" v-model="orderBy" :options="orderBys">Order</v-select>

      <div class="flex flex-wrap">
        <vehicle-card v-for="car in pagination.data" :car="car" :key="car.id"/>
      </div>



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
    orderBys  : {},
    limits    : [],
    makes     : [],
    models    : [],
    orderBy   : '-date',
    limit     : 15,
    make      : null,
    model     : null
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created: function() {

    this.initDefaults();

  },

  mounted() { },

  watch:{
    limit(newLimit) {
      this.$storage.set('limit', newLimit)
    },
    orderBy(newOrderBy) {
      this.$storage.set('orderBy', newOrderBy)
    },
    async make(newMake) {
      this.$storage.set('make', newMake)
      this.$storage.remove('models');
      this.models = await this.$storage.remember('models', async () => { return this.getList("db", "models", this.make); })
    },
    model(newModel) {
      this.$storage.set('model', newModel)
    },
  },

  methods: {
    async initDefaults() {

      this.limit   = this.$storage.get('limit', this.limit)
      this.orderBy = this.$storage.get('orderBy', this.orderBy)
      this.make    = this.$storage.get('make', this.make)
      this.model   = this.$storage.get('model', this.model)

      this.limits   = await this.$storage.remember('limits', async () => { return this.getList("local", "limits"); })
      this.orderBys = await this.$storage.remember('order_bys', async () => { return this.getList("local", "order_bys"); })
      this.makes    = await this.$storage.remember('makes', async () => { return this.getList("db", "makes"); })

      this.getCars();
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
    async getList (type, name, id = null) {
      return axios
        .get("api/lists?filter[type]=" + type + "&filter[name]=" + name + "&filter[id]=" + id)
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
    },
    onMakeChanged (value) {
      this.model = null
      this.make = value
      this.getCars();
    },
    onModelChanged (value) {
      this.model = value
      this.getCars();
    },
  }
}
</script>
