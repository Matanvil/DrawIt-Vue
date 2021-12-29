<script setup>
import { onUnmounted, ref } from "vue";
import { getStatus } from "../services/gameAPI-service";

const me = ref({});
const players = ref([]);
const loadStatus = async () => {
  const data = await getStatus();
  data.players[0].points = 100;
  me.value = data.me;
  players.value = data.players;
};
loadStatus();
const getStatusInterval = setInterval(loadStatus, 5000);
onUnmounted(() => {
  clearInterval(getStatusInterval);
});
</script>

<template>
  <div class="score-page">
    <div>
      <h2>{{ me.name }}</h2>
      <h2>{{ me.points }}</h2>
    </div>
    <div
      v-for="player in players"
      :key="player.id"
      :class="{ 'no-points': !player.points, 'player-item': true }"
    >
      {{ player.name }}: {{ player.points }}
    </div>
  </div>
</template>

<style scoped>
.score-page {
  display: flex;
  flex-direction: column;
}
.no-points {
  color: red;
  font-weight: bold;
}

</style>
