<template>
  <div class="banner">
    <div class="container banner__content">
      <h1 class="banner__title">
        A small business is only as good as its tools.
      </h1>
      <p class="banner__title-sup">
        We’re different. Flex is the only saas business platform that lets you
        run your business on one platform, seamlessly across all digital
        channels.
      </p>
      <form class="banner__form" @submit="submit">
        <input
          class="banner__input"
          type="text"
          v-model="inputValue"
          placeholder="Enter your work email"
        />
        <button type="submit" class="banner__btn">Get early access</button>
      </form>
      <p class="banner__title-sup">Lorem ipsum dolor sit.</p>
      {{ post.id }}
      {{ post.id+2 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponents",
  props:{
    post:{
      type: Object,
      required: true,
    } 
  },
  data(){
    return{
      inputValue: "",
    }
  },
  emits: {
    click: null,

    // Validate submit event
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1430px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.banner__content {
  background: #2a3342;
  width: 70%;
  padding: 134px 146px 88px 147px;
  text-align: center;

}

.banner__title {
  color: #fff;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -1.2px;
}

.banner__title-sup {
  color: #8896ab;
  font-size: 20px;
  font-weight: 500;
  width: 600px;
  margin: 30px auto;
}

.banner__form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.banner__input {
  width: 320px;
  border-radius: 8px;
  outline: none;
  padding: 19px;
  border: 1px solid  #d5dae1;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
}

.banner__btn {
  width: 210px;
  height: 56px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  border-radius: 6px;
  background: #22c55e;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
}
</style>
