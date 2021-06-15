import { LitElement, html, css } from 'lit-element';

class MapComp extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      iframe {
        width: 100%;
        height: 70vh;
      }
      .map {
        margin-bottom: 36px;
      }
    `;
  }

  render() {
    return html`
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124419.86307108357!2d135.71664876355487!3d34.96896887575515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sro!4v1623447218440!5m2!1sen!2sro"
          allowfullscreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    `;
  }
}

customElements.define('map-comp', MapComp);
