class CompOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
// bla
  connectedCallback() {
    const label = this.getAttribute("label") || "Click me";

    let backgroundColor = "#007BFF";
    this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    background-color: ${backgroundColor};
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    opacity: 0.9;
                }
            </style>
            <button>${label}</button>
        `;

    // Add a click event listener to the button
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      alert(this.getAttribute("message") || "Default action!");
    });
  }
}

customElements.define("comp-one", CompOne);
