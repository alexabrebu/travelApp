import { LitElement, html, css } from 'lit-element';

export class HeaderNav extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .burger-list ul {
        list-style: none;
      }

      .burger-list a {
        color: aliceblue;
        text-decoration: none;
        font-weight: bold;
      }

      #list {
        text-align: center;
        margin-right: 36px; /* temporary fix */
      }

      .burger-menu {
        color: aliceblue;
        font-size: 1.5vh;
        font-weight: bold;
      }

      /* @media screen and (min-width: 950px) {
        #list {
          display: none;
        }
      } */
    `;
  }

  _openMenu() {
    const a = this.shadowRoot.getElementById('list');
    if (a.style.display === 'none') {
      a.style.display = 'block';
    } else {
      a.style.display = 'none';
    }
  }

  render() {
    return html`
      <link rel="stylesheet" href="../assets/styles/styles.css" />

      <div class="header-nav">
        <nav>
          <ul>
            <li>
              <p>Travela</p>
            </li>
            <li><a href="/">Home</a></li>
            <li><a href="/tour">Tour</a></li>
            <li><a href="/hotel">Hotel</a></li>
            <li><a href="/places">Places</a></li>
            <li>
              <a href="/add-destination">Add destination</a>
            </li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li>
              <button>Book now</button>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Still wip -->
      <button class="burger-menu" @click=${this._openMenu}>
        <span></span>
        <span></span>
        <span></span>
        <p>Menu</p>
      </button>
      <div class="burger-list" id="list" style="display: none">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tour">Tour</a></li>
          <li><a href="/hotel">Hotel</a></li>
          <li><a href="/places">Places</a></li>
          <li><a href="/add-destination">Add destination</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="#">Book now</a></li>
        </ul>
      </div>
    `;
  }
}

customElements.define('header-nav-component', HeaderNav);
