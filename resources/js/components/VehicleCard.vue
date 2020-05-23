<template>
    <div class="w-full p-4 sm:w-1/2 md:w-1/3 lg:1/4 xl:1/4">
        <router-link :to="{ name: 'car.show', params: { id: car.id }}" :title="$t('view', {name: car.name})" class="relative block pb-2/3">
            <responsive-image class='absolute object-cover w-full h-full rounded-md shadow-md' :image="car.cover_image"/>
        </router-link>
        <div class="relative px-4 -mt-16">
            <div class="p-6 bg-white rounded-md shadow-lg ">
                <vehicle-features :car="this.car"/>
                <h4 class="mt-1 text-lg font-semibold leading-tight truncate">{{ car.name }}</h4>
                <div class="mt-1">{{ car.price_formatted }}</div>
                <div class="flex items-center justify-between mt-2">
                    <div class="flex">
                        <favourite
                            class=""
                            model="cars"
                            :id="car.id"
                            :favourited="car.is_favourited"
                            :name="car.name"
                        />
                        <share
                            class="ml-2"
                            :id="car.id"
                            :name="car.name"
                        />
                        <print
                            class="ml-2"
                            model="cars"
                            :id="car.id"
                            :name="car.name"
                        />
                    </div>
                    <router-link :to="{ name: 'car.show', params: { id: car.id }}" :title="$t('view', {name: car.name})" tag="button" class="btn">
                        {{ $t('more_details') }}
                    </router-link>
                </div>
            </div>
        </div>
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
