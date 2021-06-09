import { LitElement, html, css } from 'lit-element';

export class Hero extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      html,
      body {
        background-color: black; /* de intrebat*/
      }
    `;
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
            Discover The World<br />
            With Us
          </p>
          <button class="btns">Start Tour</button>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-component', Hero);
