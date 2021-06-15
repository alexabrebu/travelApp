import { LitElement, html, css } from 'lit-element';

class TravelButton extends LitElement {
  static get properties() {
    return {
      id: {
        attribute: false,
      },
    };
  }

  static get styles() {
    return css`
      .read-btn {
        font-size: 1.5vh;
        border-radius: 16px;
        color: aliceblue;
        background-color: #c767af;
        font-weight: bold;
        padding: 8px 20px;
      }
    `;
  }

  render() {
    return html`
      <button class="read-btn">
        <a href="/places/${this.id}">Read more</a>
      </button>
    `;
  }
}

customElements.define('travel-button', TravelButton);
