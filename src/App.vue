<template>
  <div id="app">
    <Nav />
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./layout/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
.body {
  margin: 30px 0;
}
</style>
