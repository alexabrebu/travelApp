import { LitElement, html, css } from 'lit-element';
import '../../components/services/places-id.js';
import '../../components/services/carousel.js';

class Tour extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      h1,
      p {
        color: rgb(18, 11, 31);
      }

      p {
        color: rgb(18, 11, 31);
        font-size: 2.5vh;
        margin-bottom: 6vh;
      }

      .text {
        word-wrap: break-word;
        hyphens: auto;
      }

      .tour-content {
        display: grid;
        background-color: aliceblue;
        padding: 16px;
        margin-top: 8vh;
        margin-bottom: 26vh;
        margin-right: 20vh;
        margin-left: 20vh;
        border-radius: 24px;
      }
      .carousel-comp {
        margin: auto;
      }

      @media screen and (max-width: 768px) {
        .tour-content {
          margin-right: 5vh;
          margin-left: 5vh;
        }
      }
    `;
  }

  render() {
    return html`
      <title>Tour Page</title>
      <hero-component></hero-component>
      <div class="tour-content">
        <div class="text">
          <h1>Hey there, traveler! Welcome onboard!</h1>
          <p>
            Here you can take a nice tour. Feel free to discover our locations.
          </p>
        </div>
        <carousel-comp class="carousel-comp"></carousel-comp>
      </div>
    `;
  }
}

customElements.define('tour-page', Tour);
