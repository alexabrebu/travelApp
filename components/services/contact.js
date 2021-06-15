import { LitElement, html, css } from 'lit-element';
import emailjs from 'emailjs-com';

class ContactForm extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .contact-form label {
        color: aliceblue;
        font-weight: bold;
        font-size: 2.5vh;
      }
      input {
        height: 4vh;
      }

      input,
      textarea {
        border: none;
        outline: none;
        border-radius: 24px;
        font-size: 20px;
        padding: 8px;
        width: 40vw;
        background-color: rgb(240, 248, 255);
      }

      .contact-form {
        grid-area: contact;
        justify-self: left;
      }

      img {
        width: 100%;
        grid-area: image;
        border-radius: 20px;
        height: 67vh;
        margin-left: 2vh;
      }

      .contact-content {
        margin-left: 2vw;
        margin-right: 2vw;
        margin-top: 8vh;
        margin-bottom: 44px;
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-rows: auto auto;
        grid-template-areas: 'contact image';
      }

      button {
        font-size: 2vh;
        border-radius: 16px;
        color: aliceblue;
        background-color: #c767af;
        font-weight: bold;
        padding: 20px 52px;
        /* float: right; */
      }

      button:hover {
        background-color: rgb(212, 132, 192);
      }

      @media screen and (max-width: 768px) {
        input,
        textarea {
          width: 35vh;
        }

        img {
          height: 40vh;
        }
      }
      @media screen and (max-width: 1200px) {
        .contact-content {
          display: block;
        }
        button {
          margin-bottom: 24px;
        }
        img {
          margin-left: 0;
        }
      }
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  async _sendEmail(e) {
    e.preventDefault();

    await emailjs
      .sendForm(
        'service_amuyvw8',
        'template_omgaa4x',
        e.target,
        'user_n6sLp5hBhQeT1Fdl8fqhm'
      )
      .then(
        result => {
          // eslint-disable-next-line no-console
          console.log(result.text);
        },
        error => {
          // eslint-disable-next-line no-console
          console.log(error.text);
        }
      );
    window.location.reload();
  }

  render() {
    return html`
      <div class="contact-content">
        <div class="contact-form">
          <form @submit=${this._sendEmail}>
            <label>Name</label>
            <br />
            <br />
            <input type="text" name="user_name" required />
            <br />
            <br />
            <br />
            <label>Email</label>
            <br />
            <br />
            <input type="email" name="user_email" required />
            <br />
            <br />
            <br />
            <label>Message</label>
            <br />
            <br />
            <textarea name="message" rows="8" cols="50" required></textarea>
            <br />
            <br />
            <br />
            <button type="submit" value="Send">Submit</button>
          </form>
        </div>
        <div class="img">
          <img
            src="https://media.giphy.com/media/yALcFbrKshfoY/giphy.gif"
            alt=""
          />
        </div>
      </div>
    `;
  }
}

customElements.define('contact-form', ContactForm);
