<template>
  <div>
    <canvas id="draw-canvas" ref="canvasEl"></canvas>
    <h2>the word is: {{ round.word }}</h2>
    <button @click="clearCanvas"> Clear Canvas</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { setDrawing } from "../services/gameAPI-service";
import { useGameStatus } from "../compositions/gameStatus";
import { createDrawingCanvas } from "../services/canvas-service";
const canvasEl = ref();
const canvas = ref();
const { round } = useGameStatus();

defineProps({
  width: String,
  height: String,
});

const clearCanvas = () => {
  canvas.value.clear();
};

onMounted(() => {
  canvas.value = createDrawingCanvas(canvasEl.value);
});

let lastCanvas = "";
const getDrawingInterval = setInterval(() => {
  if (canvasEl.value && lastCanvas !== canvasEl.value.toDataURL()) {
    lastCanvas = canvasEl.value.toDataURL();
    setDrawing(lastCanvas);
  }
}, 1000);

onUnmounted(() => {
  clearInterval(getDrawingInterval);
});
</script>

<style scoped>
canvas {
  width: v-bind("$props.width");
  height: v-bind("$props.height");
  background-color: white;
}

button {
  padding: 10px;
  border-radius: 5px;
  font-weight: 400;
  cursor: pointer;
}

</style>
