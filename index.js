class MyButton extends HTMLElement {
    constructor() {
        super(); // Poziva osnovni konstruktor HTMLElement
        this.attachShadow({ mode: 'open' }); // Shadow DOM za izolaciju
    }

    connectedCallback() {
        // Dodavanje HTML i stilova
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
            <button>${this.getAttribute('label') || 'Click Me'}</button>
        `;

        // Dodavanje event listenera
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            alert(this.getAttribute('message') || 'Default action!');
        });
    }
}

// Registruj Web Component
customElements.define('my-button', MyButton);