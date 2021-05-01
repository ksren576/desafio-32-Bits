<template>
  <div id="app">
    <Nav />
    <div class="body">
      <transition name="vista">
        <router-view></router-view>
      </transition>
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
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.3s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}

.body {
  margin: 30px 0;
}
</style>
