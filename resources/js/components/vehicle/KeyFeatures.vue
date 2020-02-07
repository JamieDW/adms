<template>

   <div class="flex items-baseline">
      <span v-if="car.is_new" class="inline-block bg-teal-200 text-teal-800 text-xs px-2 mr-2 rounded-full uppercase font-semibold tracking-wide">New</span>
      <div class="text-gray-600 text-xs font-semibold tracking-wide">
        {{ car.is_new == false ? car.year_formatted + ' &bull; '  : '' }}{{ car.body_type }} &bull; {{ car.miles_formatted }} &bull; {{ car.engine_size_formatted }} &bull; {{ car.fuel_type }}
      </div>
    </div>

</template>

<script>



export default {
  name: 'KeyFeatures',

  props: {
    car: { type: Object, default: null },
  }
}
</script>
