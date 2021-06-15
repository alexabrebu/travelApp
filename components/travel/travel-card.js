import { LitElement, html, css } from 'lit-element';
import './travel-card-item.js';
import './travel-button.js';

class TravelCard extends LitElement {
  static get properties() {
    return {
      locations: {
        type: Array,
      },
    };
  }

  static get styles() {
    return css`
      .card {
        margin-bottom: 16px;
      }

      .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      @media screen and (max-width: 768px) {
        .cards {
          justify-content: center;
        }
      }
    `;
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
    `;
  }
}

customElements.define('travel-card', TravelCard);

// IDS, ok

// ${Object.keys(this.locations).map(
//         destination2 => html`
//           <div class="btns">
//             <travel-button .id=${destination2}></travel-button>
//           </div>
//         `
//       )}
