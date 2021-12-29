<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { startGame } from "../services/gameAPI-service";
const player = ref("");
const router = useRouter();
const login = async () => {
  const data = await startGame(player.value)
  localStorage.setItem('token', data.token)
  router.push({
    name: "game",
  });
};
</script>

<template>
  <form class="login" @submit.prevent="login">
    <h1>Login</h1>
    <input type="text" placeholder="Please enter your name" v-model="player" />
    <button>Play</button>
  </form>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: antiquewhite;
  box-shadow: 2px 2px #eee;
  width: 80%;
  max-width: 600px;
  min-height: 70vh;
  padding: 2vh 2vw;
  text-align: center;
}
input {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px rgb(133, 132, 132);
  border: 1px solid;
  transition: box-shadow 200ms linear;
}
input:hover {
  box-shadow: 4px 4px rgb(196, 196, 196);
}

button {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px rgb(133, 132, 132);
  cursor: pointer;
  background-color: rgb(35, 21, 75);
  color: white;
}
</style>
