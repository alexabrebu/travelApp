/* CONTACT US PAGE */

import { LitElement, html, css } from 'lit-element';

class ContactUs extends LitElement {
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
      <title>Contact Page</title>
      <hero-component></hero-component>
      <h1>Hi, I'm the Contact Page.</h1>
      <p>Still under construction :)</p>
    `;
  }
}

customElements.define('contact-page', ContactUs);
