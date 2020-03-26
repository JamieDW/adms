<template>
    <span>
        <a href="#" @click.prevent="toggleFavourite()">
            <svg viewBox="0 0 24 24" :class="toggledState" class="w-6 h-6 fill-current">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
            </svg>
        </a>
    </span>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Share',

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
