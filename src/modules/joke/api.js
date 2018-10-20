const URL = "https://api.chucknorris.io/jokes";

export default {
  random: {
    fetch: () =>
      fetch(`${URL}/random`)
        .then(res => res.json())
        .then(joke => joke.value),
  },
};
