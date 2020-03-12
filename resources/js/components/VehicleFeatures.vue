<template>
  <div class="flex items-baseline">
    <span v-if="car.new" class="inline-block px-2 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">{{ $t('new') }}</span>
    <div :class="{'ml-2': car.new}" class="text-xs font-semibold tracking-wide text-gray-600 uppercase truncate">
      {{ !car.new ? car.year_formatted + ' &bull; '  : '' }} {{ car.body_type }} &bull; {{ car.miles_formatted }} &bull; {{ car.engine_size_formatted }} &bull; {{ car.fuel_type }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'VehicleFeatures',

  props: {
    car: {
      type: Object,
      default: null
    },
  }
}
</script>
