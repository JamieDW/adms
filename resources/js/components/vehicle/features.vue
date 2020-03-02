<template>
  <div class="flex items-baseline">
    <span v-if="car.new" class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{{ $t('new') }}</span>
    <div :class="{'ml-2': car.new}" class="text-gray-600 text-xs uppercase font-semibold tracking-wide truncate">
      {{ !car.new ? car.year_formatted + ' &bull; '  : '' }} {{ car.body_type }} &bull; {{ car.miles_formatted }} &bull; {{ car.engine_size_formatted }} &bull; {{ car.fuel_type }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'features',

  props: {
    car: {
      type: Object,
      default: null
    },
  }
}
</script>
