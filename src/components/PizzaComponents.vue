<template>
  <div class="main__block">
    <div class="main__box" v-for="cart in items" :key="cart.id">
      <img class="main__img" :src="cart.image" :alt="cart.name" />
      <h6 class="main__name">{{ cart.name }}</h6>
      <div class="main__info">
        <div class="main__type">
          <button
            v-for="(type, index) in cart.types"
            :key="index"
            class="main__type-item"
            :class="{
              'main__type-item': true,
              active: activeIndexSize === index,
            }"
            @click="setActiveIndexSize(index)"
          >
            {{ type }}
          </button>
        </div>
        <div class="main__size">
          <button
            v-for="(size, index) in cart.sizes"
            :key="index"
            :class="{
              'main__type-item': true,
              active: activeIndexType === index,
            }"
            @click="setActiveIndexType(index)"
          >
            {{ size }} см
          </button>
        </div>
      </div>
      <div class="main__bottom">
        <p class="main__price">{{ cart.price }} $</p>
        <button class="main__order">order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndexType: null,
      activeIndexSize: null,
    };
  },
  methods: {
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
