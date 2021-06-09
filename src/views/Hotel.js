/* HOTEL PAGE */

import { LitElement, html, css } from 'lit-element';

class Hotel extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      h1,
      p {
        color: aliceblue;
      }
    `;
  }

  render() {
    return html`
      <title>Hotel Page</title>
      <hero-component></hero-component>
      <h1>Hi, I'm the Hotel Page.</h1>
      <p>Still under construction :)</p>
    `;
  }
}

customElements.define('hotel-page', Hotel);
