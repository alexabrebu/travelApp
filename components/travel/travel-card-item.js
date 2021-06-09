import { LitElement, html } from 'lit-element';

class TravelCardItem extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },

      type: {
        type: String,
      },

      description: {
        type: String,
      },

      imageURL: {
        type: String,
      },

      id: {
        type: String,
      },

      test: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.test = 'hey';
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imageURL}.png" alt="" />
        <div class="container">
          <h2><b>${this.name}</b></h2>
          <p class="overflow-ellipsis">${this.description}</p>
        </div>
        <div class="bottom">
          <button class="read-btn" @click="${this._handleClick}">
            Read more
          </button>
        </div>
      </div>

      <style>
        * {
          border-spacing: 0;
        }
        .card {
          width: 460px;
          height: 560px;
          background-color: rgb(18, 11, 31);
          border-radius: 24px;
          border: 4px;
          padding-bottom: 8px;
          border-style: solid;
          border-color: rgba(157, 154, 207, 0.6);
          color: aliceblue;
          position: relative;
        }

        .card img {
          border-radius: 20px 20px 0 0;
          height: 360px;
          width: 100%;
          border-style: none none solid none;
          border-color: rgba(157, 154, 207, 0.6);
        }

        .card:hover {
          background-color: rgb(23, 13, 41);
        }

        .container {
          padding: 2px 16px;
        }

        .overflow-ellipsis {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }

        .read-btn {
          font-size: 1.5vh;
          border-radius: 15px;
          color: aliceblue;
          background-color: #c767af;
          font-weight: bold;
          padding: 10px 20px;
        }
        .bottom {
          position: absolute;
          bottom: 0;
          right: 0;
          margin: 8px;
        }
      </style>
    `;
  }

  _handleClick() {
    console.log(this.test);
  }
}

customElements.define('travel-card-item', TravelCardItem);
