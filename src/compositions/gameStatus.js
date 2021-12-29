import { onUnmounted, ref } from "vue";
import { getStatus } from "../services/gameAPI-service";

const me = ref({});
const players = ref([]);
const round = ref({});

export const initGameStatus = () => {
  const loadStatus = async () => {
    const data = await getStatus();
    data.players[0].points = 100;
    me.value = data.me;
    players.value = data.players;
    round.value = data.round;
  };
  loadStatus();
  const getStatusInterval = setInterval(loadStatus, 5000);
  onUnmounted(() => {
    clearInterval(getStatusInterval);
  });
};

export const useGameStatus = () => {
  return { me, players, round };
};
