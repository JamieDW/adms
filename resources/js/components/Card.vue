<template>
  <div class="px-8 py-8 mb-8 bg-white rounded shadow-md card sm:w-full">
    <img v-if="image" class="w-full" :src="image" :alt="imageAlt" :title="imageAlt">
    <div v-if="title" class="text-xl font-hairline card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    title: { type: String, default: null }
  }
}
</script>
