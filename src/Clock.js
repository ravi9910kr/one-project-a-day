export default class ClockDiv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // importing css
    const linkStyleClock = document.createElement("link");
    linkStyleClock.setAttribute("rel", "stylesheet");
    linkStyleClock.setAttribute("href", "../src/Clock.css");
    this.shadowRoot.append(linkStyleClock);
    console.log(linkStyleClock);
    // creating child elements
    const handHr = document.createElement("div"),
    handMn = document.createElement("div");
    
    // adding attributes to all elements
    handHr.setAttribute("class", "Hand");
    handMn.setAttribute("class", "Hand");

    // appending elements
    this.shadowRoot.appendChild(handMn);
    this.shadowRoot.appendChild(handHr);
  }
}
window.customElements.define("clock-div", ClockDiv);
