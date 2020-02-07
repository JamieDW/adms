<template>

  <div class="max-w-sm w-full lg:max-w-full lg:flex mb-4">
    <div v-if="image" class="h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{ backgroundImage: `url(${image})` }" :alt="imageAlt" :title="imageAlt">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div v-if="title" class="text-gray-900 font-bold text-xl mb-2">{{ title }}</div>
        <p v-if="summary" class="text-gray-700 text-base">{{ summary }}</p>
      </div>
    </div>
    <div >
      £{{ price }}
    </div>
  </div>

</template>

<script>
export default {
  name: 'HorizontalCard',

  props: {
    image: { type: String, default: null },
    imageAlt: { type: String, default: null },
    title: { type: String, default: null },
    summary: { type: String, default: null },
    price: { type: Number, default: null },
  }
}
</script>
