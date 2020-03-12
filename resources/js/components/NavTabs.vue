<template>
  <ul class="flex mt-4 border-b">
    <li v-for="tab in tabs" :key="tab.route" class="mr-1">
      <router-link :to="{ name: tab.route }" class="inline-block px-4 py-2 font-semibold text-blue-500 bg-white hover:text-blue-800" active-class="-mb-px border-t border-b-0 border-l border-r rounded-t">
        <fa :icon="tab.icon" fixed-width />
        {{ tab.name }}
      </router-link>
    </li>
  </ul>
</template>


<script>
//import { mapGetters } from 'vuex'

export default {
  name: 'NavTabs',

  props: {
    tabs: {
      type: Array,
      default: null
    },
  }
}
</script>
