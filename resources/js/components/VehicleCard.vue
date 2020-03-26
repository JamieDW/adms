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

                    <div class="flex justify-between mt-2 text-sm text-gray-600">
                        <favourite
                            class=""
                            model="cars"
                            v-bind:id="car.id"
                            v-bind:favourited="car.is_favourited"
                        />
                        <div class="border-l border-gray-300"></div>
                        <print
                            class=""
                            model="cars"
                            v-bind:id="car.id"
                            v-bind:favourited="car.is_favourited"
                        />
                        <div class="border-l border-gray-300"></div>
                        <share
                            class=""
                            model="cars"
                            v-bind:id="car.id"
                            v-bind:favourited="car.is_favourited"
                        />
                    </div>

                </div>
            </div>
        </router-link>
    </div>
</template>

<script>

import VehicleFeatures from './VehicleFeatures'
import Favourite from './Favourite'
import Share from './Share'
import Print from './Print'
import ResponsiveImage from './controls/ResponsiveImage'

export default {
  name: 'VehicleCard',

  components: {
    VehicleFeatures,
    Favourite,
    Share,
    Print,
    ResponsiveImage
  },

  props: {
    car: {
        type: Object,
        default: null
    },
  }
}
</script>
