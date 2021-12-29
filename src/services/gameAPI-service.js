export const startGame = (player) => {
  return fetch("https://draw-something-demo.herokuapp.com/api/start", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      player,
    }),
  }).then((response) => response.json());
};

export const getStatus = () => {
  return fetch("https://draw-something-demo.herokuapp.com/api/status", {
    headers: {
      token: localStorage.getItem("token"),
    },
  }).then((response) => response.json());
};

export const getDrawing = () => {
  return fetch("https://draw-something-demo.herokuapp.com/api/drawing", {
    headers: {
      token: localStorage.getItem("token"),
    },
  }).then((response) => response.json());
};

export const setDrawing = (draw) => {
  return fetch("https://draw-something-demo.herokuapp.com/api/drawing", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      draw,
    }),
  }).then((response) => response.json());
};

export const guessWord = (word) => {
  return fetch("https://draw-something-demo.herokuapp.com/api/word", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      word,
    }),
  }).then((response) => response.status === 200);
}
