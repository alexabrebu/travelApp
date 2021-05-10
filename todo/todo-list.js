import { LitElement, html } from 'lit-element';
import './todo-list-item.js';

class ToDoList extends LitElement {
  static get properties() {
    return {
      _todos: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this._todos = [
      {
        text: 'Lorem ipsum',
        done: true,
      },

      { text: 'Henlo there', done: false },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('LitElement connected.');
  }

  render() {
    return html`
      <h1>ToDo List:</h1>
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

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
    console.log(event);
    const newToDo = { ...Object.fromEntries(formData), done: false };
    this._todos = [...this._todos, newToDo];

    this.requestUpdate();
    form.reset();
  }
}

customElements.define('todo-list', ToDoList); // nume comp + ref catre clasa
