<template>

  <div class="flex flex-col md:flex-row mb-2 bg-white shadow-xl md:rounded-r-lg md:rounded-b-none rounded-l-none rounded-b-lg mb-4">
    <router-link :to="{ name: 'car.show', params: { id: car.id }}" :title="car.name" class="flex-1 md:flex-none md:w-5/12 lg:w-1/3 bg-cover bg-center md:rounded-l-lg md:rounded-t-none rounded-l-none rounded-t-lg" :style="{ backgroundImage: `url(${car.image})` }" style="min-height:250px;">
    </router-link>
    <div class="flex flex-col flex-1">
      <div class="flex-grow p-4 md:p-5">
        <router-link :to="{ name: 'car.show', params: { id: car.id }}" :title="car.name">
          <p class="font-bold text-xl md:text-2xl">{{ car.name }}</p>
          <p class="text-gray-700 md:text-lg"><key-features :car="car"/></p>
        </router-link>
      </div>
      <div class="p-4 md:p-5 bg-gray-100  md:rounded-br-lg md:rounded-bl-none rounded-bl-lg rounded-br-lg">
        <p class="text-right font-bold text-black md:text-lg">{{ car.price_formatted }}</p>
      </div>
    </div>
</div>

</template>

<script>

import KeyFeatures from '~/components/Vehicle/KeyFeatures'

export default {
  name: 'VehicleCard',

  components: {
    KeyFeatures
  },

  props: {
    car: { type: Object, default: null },
  }
}
</script>


