<template>
    <router-link :to="{ name: 'car.show', params: { id: car.id }}" :title="$t('view', {name: car.name})" class="w-full sm:w-1/2 md:w-1/3 lg:1/4 xl:1/4 p-4">
        <div class="relative pb-2/3">
            <responsive-image class='absolute h-full w-full object-cover rounded-lg shadow-md' :image="car.cover_image"/>
        </div>
        <div class="relative px-4 -mt-16">
            <div class=" bg-white p-6 rounded-lg shadow-lg">
                <vehicle-features :car="this.car"/>
                <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ car.name }}</h4>
                <div class="mt-1">
                    {{ car.price_formatted }}
                </div>
            </div>
        </div>
    </router-link>
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
