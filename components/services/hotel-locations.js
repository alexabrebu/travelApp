import { LitElement, html, css } from 'lit-element';

class HotelLocations extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .hotel-cards {
        width: 74vw;
        height: 52vh;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: flex-end;
        text-decoration: none;
        border: 4px;
        border-style: solid;
        border-color: rgba(157, 154, 207);
        border-radius: 24px;
        background-size: cover;
      }

      .inner {
        height: 16vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: aliceblue;
        border-radius: 24px;
        box-sizing: border-box;
        border: 4px;
        border-color: rgb(18, 11, 31);
        border-style: solid;
        padding: 36px;
      }

      .title {
        font-size: 24px;
        font-weight: bold;
        color: rgb(18, 11, 31);
      }

      .hotel-card1 {
        background-image: url('https://imgur.com/Jqvbyvo.png');
        margin-bottom: 4vh;
      }

      .hotel-card2 {
        background-image: url('https://imgur.com/5fCVFTm.png');
        margin-bottom: 4vh;
      }

      .hotel-card3 {
        background-image: url('https://imgur.com/6WB4iFS.png');
        margin-bottom: 4vh;
      }

      .hotel-card4 {
        background-image: url('https://imgur.com/9FKQ66X.png');
        margin-bottom: 4vh;
      }

      .hotel-card5 {
        background-image: url('https://imgur.com/lzZTx0D.png');
        margin-bottom: 4vh;
      }

      .hotel-card6 {
        background-image: url('https://imgur.com/EbTpjfO.png');
        margin-bottom: 4vh;
      }

      @media screen and (max-width: 1450px) {
        .hotel-cards {
          width: 58vw;
        }
        .inner {
          height: fit-content;
        }
      }

      @media screen and (max-width: 950px) {
        .hotel-cards {
          width: 52vw;
        }
      }

      @media screen and (max-width: 768px) {
        .hotel-cards {
          width: 72vw;
          height: fit-content;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="hotel-cards hotel-card1">
        <div class="inner">
          <details>
            <summary class="title">Tokyo Hotel</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vestibulum laoreet enim eu imperdiet. Aliquam sit amet nunc quis
              metus dignissim dapibus. Aliquam fringilla tellus ut nunc
              consectetur, vel accumsan quam tincidunt. Pellentesque ullamcorper
              dui tellus, nec condimentum eros aliquet et. Nullam a interdum
              est. Pellentesque euismod sodales urna, sed consequat tortor
              efficitur ac. Integer quis consequat est.
            </p>
          </details>
        </div>
      </div>

      <div class="hotel-cards hotel-card2">
        <div class="inner">
          <details>
            <summary class="title">Kyoto Hotel</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vestibulum laoreet enim eu imperdiet. Aliquam sit amet nunc quis
              metus dignissim dapibus. Aliquam fringilla tellus ut nunc
              consectetur, vel accumsan quam tincidunt. Pellentesque ullamcorper
              dui tellus, nec condimentum eros aliquet et. Nullam a interdum
              est. Pellentesque euismod sodales urna, sed consequat tortor
              efficitur ac. Integer quis consequat est.
            </p>
          </details>
        </div>
      </div>

      <div class="hotel-cards hotel-card3">
        <div class="inner">
          <details>
            <summary class="title">Nagasaki Hotel</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vestibulum laoreet enim eu imperdiet. Aliquam sit amet nunc quis
              metus dignissim dapibus. Aliquam fringilla tellus ut nunc
              consectetur, vel accumsan quam tincidunt. Pellentesque ullamcorper
              dui tellus, nec condimentum eros aliquet et. Nullam a interdum
              est. Pellentesque euismod sodales urna, sed consequat tortor
              efficitur ac. Integer quis consequat est.
            </p>
          </details>
        </div>
      </div>

      <div class="hotel-cards hotel-card4">
        <div class="inner">
          <details>
            <summary class="title">Sapporo Hotel</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vestibulum laoreet enim eu imperdiet. Aliquam sit amet nunc quis
              metus dignissim dapibus. Aliquam fringilla tellus ut nunc
              consectetur, vel accumsan quam tincidunt. Pellentesque ullamcorper
              dui tellus, nec condimentum eros aliquet et. Nullam a interdum
              est. Pellentesque euismod sodales urna, sed consequat tortor
              efficitur ac. Integer quis consequat est.
            </p>
          </details>
        </div>
      </div>

      <div class="hotel-cards hotel-card5">
        <div class="inner">
          <details>
            <summary class="title">Okinawa Hotel</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vestibulum laoreet enim eu imperdiet. Aliquam sit amet nunc quis
              metus dignissim dapibus. Aliquam fringilla tellus ut nunc
              consectetur, vel accumsan quam tincidunt. Pellentesque ullamcorper
              dui tellus, nec condimentum eros aliquet et. Nullam a interdum
              est. Pellentesque euismod sodales urna, sed consequat tortor
              efficitur ac. Integer quis consequat est.
            </p>
          </details>
        </div>
      </div>

      <div class="hotel-cards hotel-card6">
        <div class="inner">
          <details>
            <summary class="title">Nagoya Hotel</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vestibulum laoreet enim eu imperdiet. Aliquam sit amet nunc quis
              metus dignissim dapibus. Aliquam fringilla tellus ut nunc
              consectetur, vel accumsan quam tincidunt. Pellentesque ullamcorper
              dui tellus, nec condimentum eros aliquet et. Nullam a interdum
              est. Pellentesque euismod sodales urna, sed consequat tortor
              efficitur ac. Integer quis consequat est.
            </p>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('hotel-locations', HotelLocations);
