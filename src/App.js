import ClockDiv from "./Clock.js";

export default class AppDiv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // importing css
    const linkStyle = document.createElement('link');
    linkStyle.setAttribute('rel', "stylesheet");
    linkStyle.setAttribute('href', "../src/App.css");
    this.shadowRoot.append(linkStyle); 

    // creating elements
    const clockDiv = document.createElement("clock-div");

    // adding the children to the dom
    this.shadowRoot.appendChild(clockDiv);
  }
}

window.customElements.define("app-div", AppDiv);
