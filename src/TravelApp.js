import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
// import { openWcLogo } from './open-wc-logo.js';
import './views/Home.js';
import './views/Tour.js';
import './views/Hotel.js';
import './views/Places.js';
import './views/AddDestination.js';
import './views/ContactUs.js';
import '../components/header-nav.js';
import '../components/footer-nav.js';
import '../components/services/places-id.js';
import './views/Credits.js';

export class TravelApp extends LitElement {
  static get properties() {
    return {
      _routes: Array,
    };
  }

  static get styles() {
    return css`
      /* :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--travel-app-background-color);
      } */

      /* main {
        flex-grow: 1;
      } */

      /* .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      } */
    `;
  }

  constructor() {
    super();
    this.title = 'DevSchool app';
    this._routes = [
      { path: '/', component: 'home-page' },
      { path: '/tour', component: 'tour-page' },
      { path: '/hotel', component: 'hotel-page' },
      { path: '/places', component: 'places-page' },
      { path: '/places/:id', component: 'places-id' },
      { path: '/add-destination', component: 'add-destination-page' },
      { path: '/contact-us', component: 'contact-page' },
      { path: '/credits', component: 'credits-page' },
      { path: '(.*)', component: 'home-page' },
    ];
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('main');
    const router = new Router(outlet);
    router.setRoutes(this._routes);
  }

  render() {
    return html`
      <link rel="stylesheet" href="../assets/styles/styles.css" />

      <header-nav-component></header-nav-component>
      <main id="main"></main>
      <footer-nav-component aria-hidden="true"></footer-nav-component>

      <!-- <p class="app-footer">
              Made using
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/open-wc"
                >open-wc</a
              >.
            </p> -->
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _getCustomTitle(newTitle) {
    return `Your new title is ${newTitle}`;
  }
}
