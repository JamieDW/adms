<template>
    <span>
        <a href="#" @click.prevent="toggleFavourite()">
            <svg viewBox="0 0 24 24" :class="toggledState" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path>
            </svg>
        </a>
    </span>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Print',

  props: ['model', 'id', 'favorited'],

  data: function() {
      return {
          isFavorited: '',
      }
  },

  mounted() {
      this.isFavorited = this.isFavorite ? true : false;
  },

  computed: {
		toggledState() {
				return this.isFavorited ? 'text-red-500 hover:text-red-400' : 'text-grey-500 hover:text-grey-400'
		},
  },

  methods: {
      toggleFavourite() {
          this.isFavorited = !this.isFavorited;
        //   axios.get(`/api/${this.model}/${this.id}/toggleFavourite`)
        //       .then(response => this.isFavorited = response)
        //       .catch(response => console.log(response.data));
      }
  }
}
</script>
