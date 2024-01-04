<template>
  <header class="header">
    <div class="header__content">
      <a class="header__logo" href="/">
        <img :src="logo" />
      </a>
      <div class="header__buttons">
        <router-link to="/cart" class="header__btn-link">
          <span class="header__btn">450 $ | 0</span>
        </router-link>
      </div>
    </div>
  </header>
</template>
<script setup>
import logo from "../assets/logo.png";
</script>

<script>
export default {
  name: "HeaderComponents",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.header {
  padding: 20px 30px;
}
.container {
  max-width: 1430px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
}

.header__btn-link {
  text-decoration: none;
}

.header__btn {
  width: 150px;
  height: 50px;
  display: inline-block; /* Ensure the router-link takes the width of its content */
  border: none;
  color: white;
  border-radius: 30px;
  background: #fe5f1e;
  text-align: center;
  line-height: 50px; /* Center text vertically */
}
</style>
