/* TOUR PAGE */

import { LitElement, html, css } from 'lit-element';

class Tour extends LitElement {
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
      <title>Tour Page</title>
      <hero-component></hero-component>
      <h1>Hi, I'm the Tour Page.</h1>
      <p>Still under construction :)</p>
    `;
  }
}

customElements.define('tour-page', Tour);
