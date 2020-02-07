<template>
  <div class="container mx-auto">

    <card :title="$t('settings')" class="settings-card">
      <nav-tabs :tabs="tabs"></nav-tabs>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </card>

  </div>
</template>

<script>
import NavTabs from '~/components/NavTabs'

export default {
  middleware: 'auth',

  components: {
    NavTabs
  },

  computed: {
    tabs () {
      return [
        {
          icon: 'user',
          name: this.$t('profile'),
          route: 'settings.profile'
        },
        {
          icon: 'lock',
          name: this.$t('password'),
          route: 'settings.password'
        }
      ]
    }
  }
}
</script>
