import { LitElement, html } from 'lit-element';

export class Hero extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        type="text/css"
        href="../assets/styles/styles.css"
      />
      <div class="main-section">
        <!-- HERO SECTION -->
        <div class="hero-section">
          <p>
            <a href="/" class="nostyle">
              Discover The World<br />
              With Us
            </a>
          </p>
          <button class="btns">
            <a href="/tour" class="nostyle">Start Tour</a>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-component', Hero);
