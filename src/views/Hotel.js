import { LitElement, html, css } from 'lit-element';
import '../../components/services/hotel-locations.js';

class Hotel extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      h1,
      p {
        color: aliceblue;
        margin-right: 4vh;
        margin-left: 4vh;
      }

      p {
        margin-bottom: 6vh;
        font-size: 2vh;
      
      }

      .hotel-content {
        display: grid;
        background-color: rgba(18, 11, 31, 0.9);
        padding: 16px;
        margin-top: 8vh;
        margin-bottom: 26vh;
        margin-right: 20vh;
        margin-left: 20vh;
        border-radius: 24px;
      }

      .hotel-c{
        justify-self: center;
      }

       @media screen and (max-width: 768px) {
            .hotel-content{
             margin-right: 5vh;
             margin-left: 5vh;
            }

           
    `;
  }

  render() {
    return html`
      <title>Hotel Page</title>
      <hero-component></hero-component>
      <div class="hotel-content">
        <h1>Check out our hotels</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consequat tellus at magna facilisis, ac molestie mauris tincidunt.
          Vivamus laoreet mauris sit amet massa suscipit, eget gravida nunc
          accumsan. Sed sapien nisl, pretium interdum iaculis nec, vulputate
          vitae justo. Vestibulum ut dictum tortor, non tincidunt justo. Cras
          porta rhoncus metus, et bibendum nulla posuere vel. Maecenas suscipit
          arcu sed dui congue, id posuere eros finibus. Suspendisse gravida et
          massa eu volutpat. Nulla mollis augue et sem ultrices blandit. Sed et
          leo porttitor, scelerisque nisl eget, scelerisque turpis. Cras viverra
          justo sapien.
        </p>
        <hotel-locations class="hotel-c"></hotel-locations>
      </div>
    `;
  }
}

customElements.define('hotel-page', Hotel);
