import store from "./store/index.js";
import Feed from "./components/feed.js";
// const feedElement = document.querySelector("#feed");
// feedElement.addEventListener("click", event => {
//   event.preventDefault();
//   store.dispatch("challengeEvent");
// });
// console.log(store)
const feedInstance = new Feed();
console.log(feedInstance);
// feedInstance.render();
