import { LitElement, html } from 'lit-element';

class TravelCard extends LitElement {
  static get properties() {
    return {
      _locations: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this._locations = [
      {
        name: 'Lorem ipsum',
        type: '',
        description: '',
        imageURL: '',
      },
    ];
  }

  render() {
    return html``;
  }
}

customElements.define('travel-card', TravelCard);
