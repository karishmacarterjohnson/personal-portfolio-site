class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            @import "/components/stylescomponents.css";
        </style>
        <footer>
            <div>
            Copyright 2021; Karishma Johnson
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);

