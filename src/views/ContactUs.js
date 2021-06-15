import { LitElement, html, css } from 'lit-element';
import '../../components/services/contact.js';
import '../../components/services/map.js';

class ContactUs extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`

      p {
        color: aliceblue;
        font-size: 3.5vh;
        margin-left: 2vw;
      }

      .contact-portion {
        background-color: rgb(18, 11, 31);
        padding: 16px;
        margin-top: 8vh;
        margin-bottom: 26vh;
        margin-right: 20vh;
        margin-left: 20vh;
        border-radius: 24px;
      }

      @media screen and (max-width: 768px) {
          .contact-portion{
            margin-right: 5vh;
            margin-left: 5vh;
          }
    `;
  }

  render() {
    return html`
      <title>Contact Page</title>
      <hero-component></hero-component>
      <div class="contact-portion">
        <p>Hey there, leave me a message. I will actually get it :)</p>
        <contact-form class="contact-form-c"></contact-form>
        <map-comp class="map-c"></map-comp>
      </div>
    `;
  }
}

customElements.define('contact-page', ContactUs);
