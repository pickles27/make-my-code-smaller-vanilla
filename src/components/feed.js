import Component from "../lib/component.js";
import store from "../store/store.js";

export default class Feed extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector("#feed")
    });
  }

  render() {
    console.log(store);
    if (store.state.entries.length === 0) {
      this.element.innerHTML = `<p class="no-entries">No code submissions. You should <a href="#submit">submit</a> something ;)</p>`;
      return;
    }
    this.element.innerHTML = `
      <ul class="entries-list">
        ${store.state.entries
          .map(
            entry => `<li>
          ${entry}<button aria-label="select">challenge</button>
        </li>`
          )
          .join("")}
      </ul>`;

    this.element.querySelectorAll("button").forEach((button, index) => {
      button.addEventListener("click", () => {
        alert(`WOOOOO!!!!!! at index: ${index}`);
        store.dispatch("challengeEntry", { index });
      });
    });
  }
}
