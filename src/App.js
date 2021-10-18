import ClockDiv from "./Clock.js";

export default class AppDiv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.setAttribute('class', 'App');
    const linkStyle = document.createElement('link');
    linkStyle.setAttribute('rel', 'stylesheet');
    linkStyle.setAttribute('href', './App.css');
    this.shadowRoot.innerHTML = `<clock-div class='Clock'></clock-div>`;
    // this.appendChild(document.createElement("clock-div"));
  }
}

window.customElements.define("app-div", AppDiv);
