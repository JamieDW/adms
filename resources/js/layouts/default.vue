<template>
  <div class="main-layout">
    <navbar />
    <main>
      <child />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'


export default {
  name: 'MainLayout',

  components: {
    Navbar
  }
}
</script>
