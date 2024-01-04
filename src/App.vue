<template>
  <div class="container">
    <HeaderComponents />
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderComponents from "./components/HeaderComponents.vue";
</script>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.03);
  padding: 49px 38px 96px 67px;
  margin:  0 auto;
}
</style>
