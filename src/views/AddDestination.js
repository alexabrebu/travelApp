/* ADD DESTINATION PAGE */

import { LitElement, html, css } from 'lit-element';
import '../../components/hero-section.js';
import '../../components/lion-form/add-destination.js';
import '../../components/footer-nav.js';

class AddDestination extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        type="text/css"
        href="../../assets/styles/styles.css"
      />
      <div class="page-container-add">
        <hero-component class="hero-c"></hero-component>

        <destination-form class="destination-form-c"></destination-form>
      </div>
    `;
  }
}

customElements.define('add-destination-page', AddDestination);
