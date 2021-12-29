<template>
  <router-view class="main" />
  <Score class="score" />
</template>

<script setup>
import { useRouter } from "vue-router";
import { initGameStatus } from "../compositions/gameStatus.js";
import Score from "./Score.vue";

const isLoggedIn = !!localStorage.getItem("token");
if (isLoggedIn) {
  initGameStatus();
} else {
  useRouter().push({
    name: "login",
  });
}
</script>

<style scoped>
.main {
  flex: 1;
  text-align: center
}
.score {
flex: 0;
}
</style>
