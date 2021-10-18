import ClockDiv from "./Clock.js";

export default class AppDiv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const linkStyle = document.createElement('link');
    linkStyle.setAttribute('rel', 'stylesheet');
    linkStyle.setAttribute('href', './App.css');
    this.shadowRoot.innerHTML = `<clock-div></clock-div>`;
    // this.appendChild(document.createElement("clock-div"));
  }
}

window.customElements.define("app-div", AppDiv);
