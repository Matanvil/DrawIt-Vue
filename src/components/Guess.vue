<script setup>
import { ref } from "vue";
import { getDrawing, guessWord } from "../services/gameAPI-service";
import { useGameDrawing } from "../compositions/gameDrawing";
defineProps({
  width: String,
  height: String,
});

const src = useGameDrawing();
const word = ref("");

const sendWord = async () => {
  const answer = await guessWord(word.value);
  if (answer) {
    alert("Correct! 100 points to Grifindor");
  } else {
    alert("Wrong!! Guess again");
    word.value = "";
  }
};
</script>

<template>
  <div>
    <img :src="src" />
    <form @submit.prevent="sendWord">
      <input type="text" placeholder="Your Guess" v-model="word" />
      <button>Send</button>
    </form>
  </div>
</template>

<style scoped>
img {
  width: v-bind("$props.width");
  height: v-bind("$props.height");
}
</style>
