import { LitElement, html } from 'lit-element';

export class HeaderNav extends LitElement {
  static get properties() {
    return {};
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

          <!--Henlo, I'm under construction -->
          <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    `;
  }
}

customElements.define('header-nav-component', HeaderNav);
