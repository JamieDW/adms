<template>
    <div class="w-full p-4 sm:w-1/2 md:w-1/3 lg:1/4 xl:1/4">
        <router-link :to="{ name: 'car.show', params: { id: car.id }}" :title="$t('view', {name: car.name})" >
            <div class="relative pb-2/3">
                <responsive-image class='absolute object-cover w-full h-full rounded-lg shadow-md' :image="car.cover_image"/>
            </div>
            <div class="relative px-4 -mt-16">
                <div class="p-6 bg-white rounded-lg shadow-lg ">
                    <vehicle-features :car="this.car"/>
                    <h4 class="mt-1 text-lg font-semibold leading-tight truncate">{{ car.name }}</h4>
                    <div class="mt-1">
                        {{ car.price_formatted }}
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>

import VehicleFeatures from './VehicleFeatures'
import ResponsiveImage from './controls/ResponsiveImage'

export default {
  name: 'VehicleCard',

  components: {
      VehicleFeatures,
      ResponsiveImage
  },

  props: {
      car:{
          type: Object,
          default: null
      },
  }
}
</script>
