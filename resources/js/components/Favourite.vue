<template>
    <span>
        <a href="#" @click.prevent="toggleFavourite()" :title="this.isFavorited ? $t('unfavourite') : $t('favourite')">
            <svg viewBox="0 0 24 24" :class="toggledState" class="w-6 h-6 transition duration-150 ease-in-out fill-current">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
            </svg>
        </a>
    </span>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Favourite',

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
				return this.isFavorited ? 'text-red-500' : 'text-gray-500 hover:text-gray-600'
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
