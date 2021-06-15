import { LitElement, html } from 'lit-element';

export class FooterNav extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  render() {
    return html`
      <link rel="stylesheet" href="../assets/styles/styles.css" />
      <div class="footer-section">
        <div class="footer-nav">
          <nav>
            <ul>
              <li>
                @2021 ING DevSchool. All Rights Reserved ||
                <a href="/credits" id="credits">Credits</a>
              </li>
              <li><a href="/">Home</a></li>
              <li><a href="/tour">Tour</a></li>
              <li><a href="/hotel">Hotel</a></li>
              <li><a href="/places">Places</a></li>
              <li><a href="/add-destination">Add destination</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-nav-component', FooterNav);
