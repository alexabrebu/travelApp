import { LitElement, html } from 'lit-element';
import '../../components/hero-section.js';
import '../../components/travel/travel-card.js';

class Places extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <title>Places Page</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="../../assets/styles/styles.css"
      />
      <div class="page-container">
        <hero-component class="hero-c"></hero-component>
        <travel-card class="travel-c"></travel-card>
      </div>
    `;
  }
}

customElements.define('places-page', Places);
