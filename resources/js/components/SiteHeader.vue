<template>
  <header class="bg-white sm:flex sm:items-center sm:justify-between ">
    <div class="flex justify-between px-4 py-3 xl:py-5">
      <div>
        <router-link :to="{ name: user ? 'home' : 'welcome' }" class="text-gray-900">
          <svg class="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        </router-link>
      </div>
      <div class="flex sm:hidden">
        <button @click="toggle" type="button" class="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav class="sm:flex sm:items-center sm:px-4" :class="{ 'hidden': !isOpen, 'block': isOpen }">
      <!-- <div class="hidden xl:block xl:relative xl:max-w-xs xl:w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-6 h-6 text-gray-600 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
        </div>
        <input class="block w-full py-2 pl-10 pr-4 text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-gray-300" placeholder="Search by keywords">
      </div> -->
      <div class="sm:flex sm:items-center">
        <div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
          <a href="#" class="block px-3 py-1 font-semibold text-white rounded hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900 xl:hover:bg-gray-200">List your property</a>
          <a href="#" class="block px-3 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200">Trips</a>
          <a href="#" class="block px-3 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200">Messages</a>
        </div>
        <div class="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
          <div class="flex items-center sm:hidden">
            <img class="object-cover w-10 h-10 border-2 border-gray-600 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="">
            <span class="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
          </div>
          <div class="mt-5 sm:hidden">
            <a href="#account" class="block text-gray-400 hover:text-white">Account settings</a>
            <a href="#support" class="block mt-3 text-gray-400 hover:text-white">Support</a>
            <a href="#sign-out" class="block mt-3 text-gray-400 hover:text-white">Sign out</a>
          </div>
          <Dropdown class="hidden sm:block">
            <template #trigger="{ hasFocus, isOpen }">
              <span class="block w-8 h-8 overflow-hidden border-2 rounded-full "
                :class="[(hasFocus || isOpen) ? 'border-white xl:border-indigo-500' : 'border-gray-600 xl:border-gray-300']"
              >
                <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="">
              </span>
            </template>
            <template #dropdown>
              <div class="w-48 py-2 mt-3 bg-white rounded-lg shadow-xl xl:border">
                <a href="#account" class="block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-500">Account settings</a>
                <a href="#support" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-indigo-500">Support</a>
                <a href="#sign-out" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-indigo-500">Sign out</a>
              </div>
            </template>
          </Dropdown>
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
