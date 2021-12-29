<template>
  <div>
    <canvas v-ref="canvasEl"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const canvasEl = ref("");
onMounted(() => {
  console.log(canvasEl.value);
});
</script>
