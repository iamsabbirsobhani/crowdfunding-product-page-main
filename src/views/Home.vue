<template>
    <div class="home">
    <Navbar/>
    <main-contents/>
  </div>
</template>

<script>
import MainContents from '../components/MainContents.vue'

import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, MainContents }
}
</script>

<style>

.home{
  margin: 0px;
}
</style>
