import axios from "axios";

export function loadJoke() {
  return axios({
    method: "GET",
    url: 'https://v2.jokeapi.dev/joke/Any?safe-mode'
  })
    .then(res => res.data);
}