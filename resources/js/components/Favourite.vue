<template>
    <span>
        <a href="#" v-if="isFavorited" @click.prevent="toggleFavourite()">
            <fa icon="heart" :style="{ color: '#F687B3' }" fixed-width />
        </a>
        <a href="#" v-else @click.prevent="toggleFavourite()">
               <fa icon="heart" fixed-width />
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
      isFavorite() {
          return this.favorited;
      },
  },

  methods: {
      toggleFavourite() {
        debugger;
          axios.get(`/api/${this.model}/${this.id}/toggleFavourite`)
              .then(response => this.isFavorited = response)
              .catch(response => console.log(response.data));
      }
  }
}
</script>
