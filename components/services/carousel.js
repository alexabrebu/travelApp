import { LitElement, html, css } from 'lit-element';
import '@fabricelements/skeleton-carousel';

class CarouselComp extends LitElement {
  static get properties() {
    return {
      locations: {
        type: Array,
      },
    };
  }

  static get styles() {
    return css`
      skeleton-carousel {
        width: 110vh;
        height: 85vh;
        --skeleton-carousel-dot-color: rgb(18, 11, 31);
        --skeleton-carousel-nav-color: rgb(18, 11, 31);
      }
      .carousel {
        text-align: center;
      }

      p {
        color: rgb(18, 11, 31);
        font-size: 3vh;
      }

      img {
        width: 100%;
        height: 70%;
      }

      @media screen and (max-width: 1450px) {
        skeleton-carousel {
          width: 55vw;
          height: 50vw;
        }
      }

      @media screen and (max-width: 950px) {
        skeleton-carousel {
          width: 45vw;
          height: 50vw;
        }
      }

      @media screen and (max-width: 768px) {
        skeleton-carousel {
          width: 70vw;
          height: 80vw;
        }
      }

      @media screen and (max-width: 480px) {
        skeleton-carousel {
          width: 65vw;
          height: 100vw;
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
    this.locations = jsonFetchData;
  }

  render() {
    return html`
      <skeleton-carousel dots nav loop>
        ${Object.values(this.locations).map(
          destination => html`
            <div class="carousel">
              <img .src="${destination.imageUrl}.png" alt="" />

              <p>${destination.name}</p>
            </div>
          `
        )}
      </skeleton-carousel>

      <custom-style>
        <style>
          skeleton-carousel {
            --skeleton-carousel: {
            }
            --skeleton-carousel-dots: {
              width: 0px;
            }
          }
        </style>
      </custom-style>
    `;
  }
}

customElements.define('carousel-comp', CarouselComp);
