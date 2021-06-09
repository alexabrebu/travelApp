import { LitElement, html } from 'lit-element';
import './travel-card-item.js';

class TravelCard extends LitElement {
  static get properties() {
    return {
      locations: {
        type: Array,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleFetch();
  }

  async handleFetch() {
    const fetchData = await fetch(
      'https://devschool-2020.firebaseio.com/alexandra/places.json'
    );
    const jsonFetchData = await fetchData.json();
    // .then(data => {
    //    Object.values(data).map(x => this.locations.push(x));
    // });
    this.locations = jsonFetchData;
    // console.log(Object.keys(this.locations));
  }

  render() {
    return html`
      <div class="cards">
        ${Object.values(this.locations).map(
          destination => html`
            <div class="card">
              <travel-card-item
                .name=${destination.name}
                .description=${destination.description}
                .imageURL=${destination.imageUrl}
              ></travel-card-item>
            </div>
          `
        )}
      </div>

      <style>
        .card {
          margin-bottom: 16px;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      </style>
    `;
  }
}

customElements.define('travel-card', TravelCard);
