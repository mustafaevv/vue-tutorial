<template>
  <div class="main">
    <ul class="main__list">
      <button
        class="main__list-btn"
        v-for="(item, i) in links"
        :key="i"
        @click="handleButtonClick(item)"
        :class="{ active__link: selectedCategory === item }"
      >
        {{ item }}
      </button>
    </ul>
    <h2 class="main__title">All pizza</h2>
    <div class="main__block">
      <PizzaComponents :items="selectedCategoryData" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import PizzaComponents from "./PizzaComponents.vue";

export default {
  components: {
    PizzaComponents,
  },
  data() {
    return {
      data: [],
      links: ["all", "meat", "vegetarian", "grill", "acute", "closed"],
      value: null,
      selectedCategory: "all",
      selectedCategoryData: [],
      activeIndexSize: null,
      activeIndexType: null,
    };
  },
  mounted() {
    this.handleButtonClick(this.selectedCategory);
  },
  methods: {
    async handleButtonClick(category) {
      try {
        const response = await axios.get(
          `https://659528f804335332df8215ee.mockapi.io/apis/pizza`
        );
        this.data = response.data;
        const filteredData =
          category === "all"
            ? this.data
            : this.data.filter((item) => item.category === category);
        this.selectedCategory = category;
        this.selectedCategoryData = filteredData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    setActiveIndexType(index) {
      this.activeIndexType = index;
    },
    setActiveIndexSize(index) {
      this.activeIndexSize = index;
    },
  },
};
</script>

<style scoped>
.main__block {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}

.main__list {
  display: flex;
  align-items: center;
  gap: 2em;
  margin: 25px 0;
}

.main__list-btn {
  padding: 15px 25px;
  border-radius: 30px;
  background: #f9f9f9;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 500;
}

.active__link {
  background-color: black;
  color: white;
}
.main__box {
  max-width: 300px;
  width: 100%;
  text-align: center;
  margin: 50px 0;
}
.main__img {
  width: 100%;
}

.main__name {
  color: #000;
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
  letter-spacing: 0.2px;
}

.main__info {
  width: 100%;
  height: 90px;
  border-radius: 10px;
  background: #f3f3f3;
  padding: 1px 6px;
}

.main__type,
.main__size {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45%;
  margin: 3px;
}

.main__type-item,
.main__size-item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: none;
  color: #2c2c2c;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.21px;
  margin: 0 3px;
}
.main__type-item_active,
.active {
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
}

.main__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.main__price {
  color: #000;
  font-size: 22px;
  font-weight: 700;
}

.main__order {
  width: 135px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #fe5f1e;
  background: #fe5f1e;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 700;
}
</style>
