<template>
    <div class="mt-10">
        <div class="relative pb-5/6">
            <img class="absolute h-full w-full object-cover rounded-lg shadow-md" :src="car.image">
        </div>
        <div class="relative px-4 -mt-16">
            <div class=" bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                    <span v-if="car.is_new" class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">NEW</span>
                    <div :class="{'ml-2': car.is_new}" class="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                       {{ !car.is_new ? car.year_formatted + ' &bull; '  : '' }} {{ car.body_type }} &bull; {{ car.miles_formatted }} &bull; {{ car.engine_size_formatted }} &bull; {{ car.fuel_type }}
                    </div>
                </div>
                <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ car.name }}</h4>
                <div class="mt-1">
                    {{ car.price_formatted }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'vehicle-card',

  components: {

  },

  props: {
      car:{
          type: Object,
          default: null
      },
  }
}
</script>


