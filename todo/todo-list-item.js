import { LitElement, html } from 'lit-element';

class ToDoListItem extends LitElement {
  static get properties() {
    return {
      toDoItem: { type: Object },
    };
  }

  render() {
    return html` ${this.toDoItem.text} `;
  }
}

customElements.define('todo-list-item', ToDoListItem);
