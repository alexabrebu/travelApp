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
        type: true,
        description: '',
        imageURL: '',
      },
    ];
  }

  render() {
    return html`
      <ul>
        ${this._todos.map(
          item =>
            html`<li>
              <todo-list-item .toDoItem=${item}></todo-list-item>
            </li>`
        )}
      </ul>
      <form @submit=${this._handleFormSubmit}>
        <input type="text" name="text" />
        <button type="submit">Add</button>
      </form>
    `;
  }
}

customElements.define('travel-card', TravelCard); // nume comp + ref catre clasa
