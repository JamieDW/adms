<template>
  <div class="container mx-auto">

  <favourite
    model="cars"
    v-bind:id="car.id"
    v-bind:favourited="car.is_favourited"
    >
  </favourite>

  <ul>
    <li
      v-for="(value, propertyName, index) in car"
      v-bind:key="index"
      >
      {{ propertyName }}: {{ value }}
    </li>
  </ul>

  </div>
</template>

<script>

import axios from 'axios'

import Favourite from '~/components/Favourite'

export default {


  components: {
    Favourite
  },


  data: () => ({
    car: { type: Object, default: null },
    error: '',
    success: ''
  }),

  computed: {

  },

  async beforeRouteEnter (to, from, next) {

    try {
      const { data } = await axios.get(`/api/cars/${to.params.id}`)


      next(vm => {
        // vm.success = data.status
        // debugger;
        vm.car = data;
        })
    } catch (e) {
      next(vm => { vm.error = e.response.data.status })
    }
  },
}
</script>
