import { LitElement, html } from 'lit-element';

export class Footer extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <link rel="stylesheet" href="../assets/styles/styles.css" />
      <div class="footer-section">
        <div class="footer-text">
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit debitis perspiciatis quae veniam, nisi, ut blanditiis
            distinctio quas tempora dicta totam porro corrupti. Dolore hic
            deleniti doloribus a ipsa!
          </p>
        </div>
        <form class="form-subscribe">
          <input type="email" aria-label="email" required />
          <button>Subscribe</button>
        </form>
      </div>
    `;
  }
}

customElements.define('footer-section-component', Footer);
