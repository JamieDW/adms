<template>
    <span>
        <a href="#" @click.prevent="print()" :title="$t('share', {name: name})">
            <svg viewBox="0 0 24 24" class="w-6 h-6 text-gray-500 transition duration-150 ease-in-out fill-current hover:text-gray-600">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
            </svg>
        </a>
    </span>
</template>

<script>

export default {
  name: 'Print',

  props: ['id', 'name'],

  methods: {
      print() {
      }
  }
}
</script>
