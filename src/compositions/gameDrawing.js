import { onUnmounted, ref } from "vue";
import { getDrawing } from "../services/gameAPI-service";

export const useGameDrawing = () => {
  const draw = ref("");
  const loadDrawing = async () => {
    const data = await getDrawing();
    draw.value = data.draw;
  };
  loadDrawing();
  const getDrawingInterval = setInterval(loadDrawing, 1000);
  onUnmounted(() => {
    clearInterval(getDrawingInterval);
  });
  return draw;
};