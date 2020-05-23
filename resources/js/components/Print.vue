<template>
    <span>
        <a href="#" @click.prevent="print()" :title="$t('print', {name: name})">
            <svg viewBox="0 0 24 24" class="w-6 h-6 text-gray-500 transition duration-150 ease-in-out fill-current hover:text-gray-600">
                <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path>
            </svg>
        </a>
    </span>
</template>

<script>



export default {
  name: 'Print',

  props: ['model', 'id', 'name'],

  methods: {
      print() {
      }
  }
}
</script>
