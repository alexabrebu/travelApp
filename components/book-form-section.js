import { LitElement, html } from 'lit-element';

export class BookForm extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        type="text/css"
        href="../assets/styles/styles.css"
      />
      <div class="main-section">
        <!-- FORM SECTION -->
        <div class="form-section">
          <form>
            <div class="form-item">
              <label for="destination">Destination</label> <br />
              <input
                list="locations"
                class="form-cell"
                aria-label="Pick a location"
                required
              />
              <datalist id="locations">
                <option value="Tokyo, Japan"></option>
                <option value="Kyoto, Japan"></option>
                <option value="Nagasaki, Japan"></option>
                <option value="Sapporo, Japan"></option>
                <option value="Okinawa, Japan"></option>
                <option value="Nagoya, Japan"></option>
              </datalist>
            </div>

            <div class="form-item">
              <label for="members">Members</label> <br />
              <input
                type="number"
                aria-label="Number of people"
                min="1"
                max="10"
                step="1"
                class="form-cell"
                required
              />
            </div>

            <div class="form-item">
              <label for="check-in">Check in Date</label> <br />
              <input
                type="date"
                class="form-cell"
                aria-label="Select a check-in date"
                required
              />
            </div>

            <div class="form-item">
              <label for="check-out">Check out Date</label> <br />
              <input
                type="date"
                class="form-cell"
                aria-label="Select a check-out-date"
                required
              />
            </div>

            <div class="form-item">
              <input type="submit" value="Book Now" class="btns" />
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define('book-form-component', BookForm);
