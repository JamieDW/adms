<template>
  <div class="min-h-screen antialiased bg-gray-200 xl:flex xl:flex-col xl:h-screen">
    <SiteHeader class="xl:flex-shrink-0"/>
    <child/>
  </div>
</template>

<script>

import SiteHeader from '~/components/SiteHeader'

export default {
  name: 'app',

  components: {
    SiteHeader,
  },
}
</script>
