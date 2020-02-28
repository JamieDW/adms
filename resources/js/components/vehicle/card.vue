<template>
    <div class="mt-10">
        <div class="relative pb-2/3">
            <img class="absolute h-full w-full object-cover rounded-lg shadow-md" :src="car.image">
        </div>
        <div class="relative px-4 -mt-16">
            <div class=" bg-white p-6 rounded-lg shadow-lg">
                <features :car="this.car"></features>
                <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ car.name }}</h4>
                <div class="mt-1">
                    {{ car.price_formatted }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import features from './features'


export default {
  name: 'vehicle-card',

  components: {
      features
  },

  props: {
      car:{
          type: Object,
          default: null
      },
  }
}
</script>


