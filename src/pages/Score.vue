<script setup>
import { useGameStatus } from "../compositions/gameStatus";

const { me, players } = useGameStatus();
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
