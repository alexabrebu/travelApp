import { LitElement, html } from 'lit-element';

import '../../node_modules/@lion/form/lion-form.js';
import '../../node_modules/@lion/input/lion-input.js';
import '../../node_modules/@lion/textarea/lion-textarea.js';
import '../../node_modules/@lion/button/lion-button.js';
import '../../node_modules/@lion/select-rich/lion-select-rich.js';
import '../../node_modules/@lion/select-rich/lion-select-invoker.js';
import '../../node_modules/@lion/select-rich/lion-option.js';
import '../../node_modules/@lion/listbox/lion-listbox.js';
import { css } from '@lion/core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { Required } from '@lion/form-core';
import { IsRightUrl } from './validators/url-link.js';
import { CapitalWord } from './validators/capital-word.js';

class DestinationForm extends LitElement {
  static get properties() {
    return {
      null: {
        attribute: false,
      },

      nature: {
        type: String,
      },

      culture: {
        type: String,
      },

      modern: {
        type: String,
      },

      other: {
        type: String,
      },

      formData: {
        attribute: false,
      },
    };
  }

  static get styles() {
    return [
      css`
        .form-control label {
          color: rgb(18, 11, 31)e;
          font-weight: bold;
          font-size: 24px;
        }
        .form-control input,
        textarea {
          border-radius: 24px;
          height: 6vh;
          font-size: 20px;
          padding: 8px;
          background-color:rgba(199, 103, 175, 0.2)
        }

        .form-control {
          width: 52vh;
          outline: none;
           border: none;
        }

        lion-select-invoker {
          border-radius: 24px;
          height: 6vh;
          background-color:rgba(199, 103, 175, 0.2);
          /* background-color:rgb(71, 135, 179, 0.6) */
        }

        lion-button{
           font-size: 2vh;
            border-radius: 15px;
            color: aliceblue;
            background-color: rgb(18, 11, 31);
            font-weight: bold;
            padding: 20px 50px;
        }

        lion-button:hover{
          background-color:rgba(98, 83, 128);
        }

        lion-option{
            width: 20vh;
       
        }

          @media screen and (max-width: 768px) {
            .form-control, lion-option{
              width: fit-content;
            }

          
          }

        .
      `,
    ];
  }

  constructor() {
    super();
    this.null = null;
    this.nature = 'nature';
    this.culture = 'culture';
    this.modern = 'modern';
    this.other = 'other';
    // this.submitHandler = this.submitHandler.bind(this);
  }

  connectedCallback() {
    loadDefaultFeedbackMessages();
    super.connectedCallback();
  }

  async _submitHandler(ev) {
    if (ev.target.hasFeedbackFor.includes('error')) {
      const firstFormElWithError = ev.target.formElements.find(el =>
        el.hasFeedbackFor.includes('error')
      );
      firstFormElWithError.focus();
      return;
    }
    this.formData = ev.target.serializedValue;

    await fetch('https://devschool-2020.firebaseio.com/alexandra/places.json', {
      method: 'POST',
      body: JSON.stringify(this.formData),
    });

    console.log('ok');
    window.location.reload();
  }

  render() {
    return html`
      <lion-form @submit=${this._submitHandler}>
        <form class="form">
          <lion-input
            name="name"
            label="Name"
            .validators="${[new Required(), new CapitalWord()]}"
          ></lion-input>
          <br />
          <lion-select-rich
            name="type"
            label="Type"
            .validators="${[new Required()]}"
          >
            <lion-option .choiceValue=${this.null}>select a type</lion-option>
            <lion-option .choiceValue=${this.nature}>nature</lion-option>
            <lion-option .choiceValue=${this.culture}>culture</lion-option>
            <lion-option .choiceValue=${this.modern}>modern</lion-option>
            <lion-option .choiceValue=${this.other}>other</lion-option>
          </lion-select-rich>
          <br />
          <lion-textarea
            name="description"
            label="Description"
            max-rows="4"
            .validators="${[new Required(), new CapitalWord()]}"
          ></lion-textarea>
          <br />
          <lion-input
            name="imageURL"
            label="ImageURL"
            .validators="${[new Required(), new IsRightUrl()]}"
          ></lion-input>
          <br />
          <lion-button>Submit</lion-button>
        </form>
      </lion-form>
    `;
  }
}

customElements.define('destination-form', DestinationForm);
