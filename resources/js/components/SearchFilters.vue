<template>
  <section class="bg-gray-800 xl:w-72">
    <div class="flex justify-between px-4 py-3 xl:hidden">
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
        </div>
        <input class="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" placeholder="Search by keywords">
      </div>
      <button type="button" class="ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4"
        @click="toggle"
        :class="{ 'bg-gray-600': isOpen, 'bg-gray-700': !isOpen }"
      >
        <svg class="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"/></svg>
        <span class="ml-1 text-white font-medium">Filters</span>
      </button>
    </div>
    <div :class="{ 'hidden': !isOpen, 'block': isOpen }" class="xl:block xl:h-full xl:flex xl:flex-col xl:justify-between">
      <div class="lg:flex xl:block xl:overflow-y-auto">
        <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
          <div class="flex flex-wrap -mx-2">
            <v-select @change="onMakeChanged" v-model="filter.make" :options="makes">Make</v-select>
            <v-select @change="onModelChanged" v-model="filter.model" :options="models">Model</v-select>

            <v-select @change="onLimitChanged" v-model="filter.limit" :options="limits">Limit</v-select>
            <v-select @change="onOrderByChanged" v-model="filter.orderBy" :options="orderBys">Order</v-select>
          </div>
        </div>
        <!-- <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
          <span class="block text-sm font-semibold text-gray-500">Property Type</span>
          <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="house">
              <span class="ml-2 text-white">House</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="apartment">
              <span class="ml-2 text-white">Apartment</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="loft">
              <span class="ml-2 text-white">Loft</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="townhouse">
              <span class="ml-2 text-white">Townhouse</span>
            </label>
          </div>
        </div>
        <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
          <span class="block text-sm font-semibold text-gray-500">Amenities</span>
          <div class="sm:flex sm:-mx-2 sm:flex-wrap">
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="balcony">
              <span class="ml-2 text-white">Balcony</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="pool">
              <span class="ml-2 text-white">Pool</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="beach">
              <span class="ml-2 text-white">Beach</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="petFriendly">
              <span class="ml-2 text-white">Pet friendly</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="kidFriendly">
              <span class="ml-2 text-white">Kid friendly</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="parking">
              <span class="ml-2 text-white">Parking</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="airConditioning">
              <span class="ml-2 text-white">Air conditioning</span>
            </label>
          </div>
        </div> -->
      </div>
      <div class="bg-gray-900 px-4 py-4 sm:text-right">
        <button @click="updateResults()" class="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">Update results</button>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {

  name: 'SearchFilters',

  props: ['filters'],

  data() {
    return {
      isOpen: false,
      orderBys  : [],
      limits    : [],
      makes     : [],
      models    : [],
      filter    : this.filters
    }
  },

  created: function() {

    this.populateForm();

  },

  watch:{
    'filter.limit'(newLimit) {
      this.$storage.set('limit', newLimit)
    },
    'filter.orderBy'(newOrderBy) {
      this.$storage.set('orderBy', newOrderBy)
    },
    async 'filter.make'(newMake) {
      this.$storage.set('make', newMake)
      this.$storage.remove('models');
      this.models = await this.$storage.remember('models', async () => { return this.getList("db", "models", this.filter.make); })
    },
    'filter.model'(newModel) {
      this.$storage.set('model', newModel)
    },
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    async populateForm() {

      this.limits   = await this.$storage.remember('limits', async () => { return this.getList("local", "limits"); })
      this.orderBys = await this.$storage.remember('order_bys', async () => { return this.getList("local", "order_bys"); })
      this.makes    = await this.$storage.remember('makes', async () => { return this.getList("db", "makes"); })
    },
    async getList (type, name, id = null) {
      return axios
        .get("api/lists?filter[type]=" + type + "&filter[name]=" + name + "&filter[id]=" + id)
        .then ( function (response) {
          return response.data;
        })
    },
    updateResults() {
      this.toggle()
      this.$emit('update-results', this.filter)
    },
    onLimitChanged (value) {
      this.filter.limit = value
    },
    onOrderByChanged (value) {
      this.filter.orderBy = value

    },
    onMakeChanged (value) {
      this.filter.model = null
      this.filter.make = value
    },
    onModelChanged (value) {
      this.filter.model = value
    },
  },
}
</script>
