<!-- src/components/Layout.vue -->
<template>
  <div>
    <header>
      <HeaderComponents/>
    </header>
    <main>
      <!-- Include router-view here to render the current route's component -->
      <router-view></router-view>
    </main>

    <footer>
      <!-- Your footer content here -->
    </footer>
  </div>
</template>

<script>
import HeaderComponents from "../components/HeaderComponents.vue"
export default {
  name: 'LayoutItem',
  components:{
    HeaderComponents
  }
};
</script>

<style>
/* Your component styles here */
</style>
