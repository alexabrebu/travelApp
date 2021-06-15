import { LitElement, html, css } from 'lit-element';

class CreditsPage extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      p {
        color: aliceblue;
        margin-left: 2vw;
        font-size: 4vh;
      }

      ul {
        list-style: inside url('../../assets/images/sakura.svg');
      }

      ul li {
        color: aliceblue;
        font-size: 2.5vh;
      }

      ul li:hover {
        color: #c767af;
      }

      .credits-page {
        background-color: rgb(18, 11, 31);
        padding: 16px;
        margin-top: 8vh;
        margin-bottom: 20vh;
        margin-right: 20vh;
        margin-left: 20vh;
        border-radius: 24px;
      }

      @media screen and (max-width: 768px) {
        .credits-page {
          margin-right: 5vh;
          margin-left: 5vh;
        }
      }
    `;
  }

  render() {
    return html`
      <title>Credits Page</title>
      <link rel="stylesheet" href="../assets/styles/styles.css" />
      <hero-component></hero-component>
      <div class="credits-page">
        <p>Credit goes to all these talented people:</p>
        <ul>
          <li>
            <a href="https://unsplash.com/photos/5-GNa303REg" class="nostyle"
              >Alex Knight</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/wfwUpfVqrKU" class="nostyle"
              >Alex Knight</a
            >
          </li>

          <li>
            <a href="https://unsplash.com/photos/2cdvYh6ULCs" class="nostyle"
              >Agathe Marty</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/MsMISAIe8Qw" class="nostyle"
              >Andre Benz</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/hwLAI5lRhdM" class="nostyle"
              >Clay Banks</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/qn_UoEcnj5k" class="nostyle"
              >Defne Kucukmustafa</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/1Qye5Rv0bNo" class="nostyle"
              >Kenshi Kingami</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/e4I2ktXz5cA" class="nostyle"
              >Zhaoli Jin</a
            >
          </li>

          <!-- Travel Cards -->
          <li>
            <a href="https://unsplash.com/photos/9Qwbfa_RM94" class="nostyle"
              >JJ Ying</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/ibvRAT-eLrk" class="nostyle"
              >Ang Yz</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/WNBNTbFi8pk" class="nostyle"
              >Bing Hui Yau</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/w-HlgSsLZgE" class="nostyle"
              >Julie Anne Garrido</a
            >
          </li>
          <li>
            <a href="https://unsplash.com/photos/WJPT8VPaGoQ" class="nostyle"
              >Laurențiu Morariu</a
            >
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('credits-page', CreditsPage);
