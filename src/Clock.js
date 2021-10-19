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
      handMn = document.createElement("div"),
      handSc = document.createElement("div");

    // adding attributes to all elements
    handHr.setAttribute("class", "Hand hrHand");
    handMn.setAttribute("class", "Hand mnHand");
    handSc.setAttribute("class", "Hand scHand");
    setInterval(() => {
      // rotating the hands
      this.rotateHand(handHr, handMn, handSc);
      // appending elements
      this.shadowRoot.appendChild(handHr);
      this.shadowRoot.appendChild(handMn);
      this.shadowRoot.appendChild(handSc);
    }, 1000);
  }
  rotateHand(hrHnd, mnHnd, scHnd) {
    const date = new Date();
    const hr =
        date.getHours() * 30 + date.getMinutes() / 2 + date.getSeconds() / 120,
      mn = date.getMinutes() * 6 + date.getSeconds() / 10,
      sc = date.getSeconds() * 6;
    hrHnd.style.transform = `rotateZ(${hr}deg)`;
    mnHnd.style.transform = `rotateZ(${mn}deg)`;
    scHnd.style.transform = `rotateZ(${sc}deg)`;
  }
}
window.customElements.define("clock-div", ClockDiv);
