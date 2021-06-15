import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/travel-app.js';
import '../components/lion-form/add-destination.js';
import '../components/travel/travel-card-item.js';
import '../src/views/AddDestination.js';
import '../components/travel/travel-card.js';
import '../src/views/Places.js';
import '../src/views/Hotel.js';
import '../src/views/Tour.js';
import '../src/views/ContactUs.js';
import '../components/services/contact.js';
import '../src/views/Home.js';

describe('TravelApp', () => {
  let element;
  beforeEach(async () => {
    // arrange
    element = await fixture(html`<travel-app></travel-app>`);
  });

  // it('renders a h1', () => {
  //   const h1 = element.shadowRoot.querySelector('h1');
  //   expect(h1).to.exist;
  //   expect(h1.textContent).to.equal('DevSchool app');
  // });

  // it('passes the a11y audit', async () => {
  //   await expect(element).shadowDom.to.be.accessible();
  // });

  it('can compute custom title', () => {
    // const testElement = element.shadowRoot

    // act
    const newTitle = element._getCustomTitle('Hey');
    console.log(newTitle);

    // assert
    expect(newTitle).to.not.be.empty;
    expect(newTitle).to.equal('Your new title is Hey'); // to.not.equal
  });

  it('has the expected shadowDom', () => {
    expect(element).shadowDom.to.equal(`
     <link rel="stylesheet" href="../assets/styles/styles.css" />
      <header-nav-component></header-nav-component>
      <main id="main"></main>
      <footer-nav-component aria-hidden="true"></footer-nav-component>
    `);
  });
});

describe('DestinationForm', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<destination-form></destination-form>`);
  });

  it('calls _submitHandler function when the form is submitted (lion-button is clicked)', async () => {
    const stubFunction = stub(el, '_submitHandler');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(stubFunction).to.have.callCount(1);
  });

  it('has 2 inputs', async () => {
    const lionInputs = el.shadowRoot.querySelectorAll('lion-input');
    expect(lionInputs.length).to.equal(2);
  });

  it('has 1 select dropdown', async () => {
    const lionInputs = el.shadowRoot.querySelectorAll('lion-select-rich');
    expect(lionInputs.length).to.equal(1);
  });

  it('has 1 textarea', async () => {
    const lionInputs = el.shadowRoot.querySelectorAll('lion-textarea');
    expect(lionInputs.length).to.equal(1);
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});

describe('TravelCardItem', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<travel-card-item></travel-card-item>`);
  });

  it('has an image', () => {
    const cardImage = el.shadowRoot.querySelector('img');
    expect(cardImage).to.exist;
  });

  it('has an h2', () => {
    const cardName = el.shadowRoot.querySelector('h2');
    expect(cardName).to.exist;
  });
});

describe('AddDestination', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<add-destination-page></add-destination-page>`);
  });

  it('has the right shadowDom', () => {
    expect(el).shadowDom.to.equal(`
       <link
        rel="stylesheet"
        type="text/css"
        href="../../assets/styles/styles.css"
      />
      <div class="page-container-add">
        <hero-component class="hero-c"></hero-component>

        <destination-form class="destination-form-c"></destination-form>
      </div>
    `);
  });
});

describe('Places', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<places-page></places-page>`);
  });

  it('includes the travel cards', () => {
    expect(el.shadowRoot.querySelectorAll('travel-card')).to.exist;
  });
});

describe('Hotel', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<hotel-page></hotel-page>`);
  });

  it('includes the hotel cards', () => {
    expect(el.shadowRoot.querySelectorAll('hotel-locations')).to.exist;
  });
});

describe('Tour', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<tour-page></tour-page>`);
  });

  it('includes the carousel component', () => {
    expect(el.shadowRoot.querySelectorAll('carousel-comp')).to.exist;
  });
});

describe('ContactUs', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<contact-page></contact-page>`);
  });

  it('has the right shadowDom', () => {
    expect(el).shadowDom.to.equal(`
     <title>Contact Page</title>
      <hero-component></hero-component>
      <div class="contact-portion">
        <p>Hey there, leave me a message. I will actually get it :)</p>
        <contact-form class="contact-form-c"></contact-form>
        <map-comp class="map-c"></map-comp>
      </div>
    `);
  });
});
