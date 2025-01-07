class MyButton extends HTMLElement {
  constructor() {
    super(); // Calls the base constructor of HTMLElement
    this.attachShadow({ mode: "open" }); // Creates an isolated Shadow DOM
  }

  connectedCallback() {
    // Get the 'label' attribute
    const label = this.getAttribute("label") || "Click Me";

    // Determine the background color based on the label
    let backgroundColor;
    switch (label.toLowerCase()) {
      case "submit":
        backgroundColor = "#4CAF50"; // Green for "Submit"
        break;
      case "cancel":
        backgroundColor = "#F44336"; // Red for "Cancel"
        break;
      default:
        backgroundColor = "#007BFF"; // Blue for any other label
        break;
    }

    // Add the button's HTML and styles to the Shadow DOM
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

// Register the custom element
customElements.define("my-button", MyButton);
