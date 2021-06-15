import { LitElement, html } from 'lit-element';
import '../../components/hero-section.js';
import '../../components/book-form-section.js';
import '../../components/content-description.js';
import '../../components/footer-section.js';
import '../../components/header-nav.js';
import '../../components/travel/travel-card.js';
import '../../components/lion-form/add-destination.js';

export class Home extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <title>Home Page</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="../../assets/styles/styles.css"
      />

      <div class="page-container">
        <hero-component class="hero-c"></hero-component>
        <book-form-component class="book-form-c"></book-form-component>
        <description-component class="description-c"></description-component>
        <footer-section-component class="footer-c"></footer-section-component>
      </div>
    `;
  }
}

customElements.define('home-page', Home);
