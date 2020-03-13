<template>
  <nav class="flex flex-wrap items-center justify-between p-6 bg-gray-700">
    <div class="flex items-center mr-6 text-white flex-no-shrink">
      <!-- Logo -->
      <svg class="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <router-link :to="{ name: user ? 'home' : 'welcome' }" class="text-xl font-semibold tracking-tight">{{ appName }}</router-link>
    </div>
    <div class="block sm:hidden">
      <button @click="toggleNav" class="flex items-center px-3 py-2 text-teal-300 border rounded border-teal-light hover:text-white hover:border-white">
        <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="openNav ? 'block': 'hidden'" class="flex-grow w-full sm:flex sm:items-center sm:w-auto">

      <!-- Top nav links -->
      <!-- <div class="text-sm font-bold sm:flex-grow">
        <a href="https://laravel.com/docs/5.8" class="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">Laravel</a>
        <a href="https://vuejs.org/" class="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">Vue.js</a>
        <a href="https://tailwindcss.com/" class="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">Tailwind CSS</a>
        <a href="https://github.com/shriker/laravel-vue-spa-tailwind" class="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">Github</a>
      </div> -->

      <!-- Authenticated -->
      <div v-if="user" class="flex flex-col items-start justify-between bg-grey-lighter md:flex-row md:items-center">
        <router-link :to="{ name: 'settings.profile' }">
          <img :src="user.photo_url" class="w-10 h-10 mt-2 rounded-full md:mt-0 lg:mt-0" :alt="$t('settings')" :title="$t('settings')">
        </router-link>
        <router-link :to="{ name: 'settings.profile' }" class="px-2 font-semibold text-teal-200">{{ user.name }}</router-link>
        <a href="#" class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white no-underline border border-white rounded sm:mt-0" @click.prevent="logout"><fa icon="sign-out-alt" fixed-width />{{ $t('logout') }}</a>
      </div>

      <!-- Guest -->
      <template v-else>
        <div class="mr-4 font-semibold text-white nav-item">
          <router-link :to="{ name: 'login' }" class="">
            {{ $t('login') }}
          </router-link>
        </div>
        <div class="font-semibold text-white nav-item">
          <router-link :to="{ name: 'register' }" class="px-4 py-1 text-white border border-white rounded hover:bg-teal-600">
            {{ $t('register') }}
          </router-link>
        </div>
      </template>

    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'


export default {

  data: () => ({
    appName: window.config.appName,
    openNav: false
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
    toggleNav: function() {
      this.openNav = !this.openNav
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
