import { LitElement, html, css } from 'lit-element';

class PlacesId extends LitElement {
  static get properties() {
    return {
      locations: {
        type: Array,
      },
      myId: {
        type: Array,
      },
    };
  }

  static get styles() {
    return css`
      h1 {
        color: aliceblue;
      }
    `;
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   this.handleFetch();
  // }

  // async handleFetch() {
  //   const fetchData = await fetch(
  //     'https://devschool-2020.firebaseio.com/alexandra/places.json'
  //   );
  //   const jsonFetchData = await fetchData.json();
  //   // .then(data => {
  //   //    Object.values(data).map(x => this.locations.push(x));
  //   // });
  //   this.locations = jsonFetchData;
  // }

  render() {
    return html`<h1>Should be a travel card. Work in progress!</h1>`;
  }
}

customElements.define('places-id', PlacesId);
