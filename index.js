class MyButton extends HTMLElement {
  constructor() {
    super(); // Base constructor call HTMLElement
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // HTML and Style adding
    this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    background-color:rgb(150, 139, 139);
                    color: black;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <button>${this.getAttribute("label") || "Click Me"}</button>
        `;

    // Event listener add
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      alert(this.getAttribute("message") || "Default action!");
    });
  }
}

//  Web Component  Registration
customElements.define("my-button", MyButton);
