<template>
  <header class="bg-white sm:flex sm:items-center sm:justify-between ">
    <div class="flex justify-between px-4 py-3 xl:py-5">
      <div>
        <router-link :to="{ name: user ? 'home' : 'welcome' }" class="text-gray-900">
          <svg class="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        </router-link>
      </div>
      <div class="flex sm:hidden">
        <button @click="toggle" type="button" class="px-2 text-gray-500 hover:text-white focus:outline-none hover:text-gray-600">
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav class="sm:flex sm:items-center sm:px-4" :class="{ 'hidden': !isOpen, 'block': isOpen }">
      <div class="sm:flex sm:items-center">
        <div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
          <a href="#" class="block px-3 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200">Favourites</a>
          <a href="#" class="block px-3 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200">Sign in</a>
          <a href="#" class="block px-3 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200">Sell in</a>
        </div>
        <div class="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">

          <!-- Authenticated -->
          <div v-if="user">
            <Dropdown class="hidden sm:block">
              <template #trigger="{ hasFocus, isOpen }">
                <span :class="[(hasFocus || isOpen) ? 'border-white xl:border-indigo-500' : 'border-gray-600 xl:border-gray-300']">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </span>
              </template>
              <template #dropdown>
                <div class="w-48 py-2 mt-3 bg-white rounded-lg shadow-xl xl:border">
                  <router-link :to="{ name: 'settings.profile' }" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-indigo-500">{{ $t('settings') }}</router-link>
                  <a href="#" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-indigo-500" @click.prevent="logout">{{ $t('logout') }}</a>
                </div>
              </template>
            </Dropdown>
            <div class="flex items-center sm:hidden">
              <span class="font-semibold text-gray-200 sm:hidden">{{ user.name }}</span>
            </div>
            <div class="mt-5 sm:hidden">
              <router-link :to="{ name: 'settings.profile' }" class="block mt-3 text-gray-400 hover:text-white">{{ $t('settings') }}</router-link>
              <a href="#" class="block mt-3 text-gray-400 hover:text-white" @click.prevent="logout">{{ $t('logout') }}</a>
            </div>
          </div>
          <!-- Guest -->
          <template v-else>
            <div class="mr-4 font-semibold nav-item">
              <router-link :to="{ name: 'login' }" class="">
                {{ $t('login') }}
              </router-link>
            </div>
            <div class="font-semibold nav-item">
              <router-link :to="{ name: 'register' }" class="px-4 py-1 text-white border border-white rounded hover:bg-teal-600">
                {{ $t('register') }}
              </router-link>
            </div>
          </template>


          <!-- <div v-if="user" class="flex flex-col items-start justify-between bg-grey-lighter md:flex-row md:items-center">
            <router-link :to="{ name: 'settings.profile' }">
              <img :src="user.photo_url" class="w-10 h-10 mt-2 rounded-full md:mt-0 lg:mt-0" :alt="$t('settings')" :title="$t('settings')">
            </router-link>
            <router-link :to="{ name: 'settings.profile' }" class="px-2 font-semibold text-teal-200">{{ user.name }}</router-link>
            <a href="#" class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white no-underline border border-white rounded sm:mt-0" @click.prevent="logout"><fa icon="sign-out-alt" fixed-width />{{ $t('logout') }}</a>
          </div>


          <template v-else>
            <div class="mr-4 font-semibold nav-item">
              <router-link :to="{ name: 'login' }" class="">
                {{ $t('login') }}
              </router-link>
            </div>
            <div class="font-semibold nav-item">
              <router-link :to="{ name: 'register' }" class="px-4 py-1 text-white border border-white rounded hover:bg-teal-600">
                {{ $t('register') }}
              </router-link>
            </div>
          </template> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

import { mapGetters } from 'vuex'
import Dropdown from '~/components/controls/Dropdown'

export default {
  components: { Dropdown },

  props: [],

  data() {
    return {
      appName: window.config.appName,
      isOpen: false,
    }
  },

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
