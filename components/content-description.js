import { LitElement, html, css } from 'lit-element';

export class ConentDescription extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .description-grid {
        display: grid;
        grid-template-columns: 0.8fr 3fr;
        grid-template-rows: max-content;
        grid-template-areas: 'sn ds';
      }

      .side-nav {
        grid-area: sn;
      }

      .description-section {
        grid-area: ds;
      }

      @media screen and (max-width: 768px) {
        .description-grid {
          grid-template-columns: auto;
          grid-template-rows: max-content;
          grid-template-areas: 'ds';
        }

        .side-nav {
          display: none;
        }
      }
    `;
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        type="text/css"
        href="../assets/styles/styles.css"
      />
      <div class="description-grid">
        <div class="side-nav">
          <ul>
            <li><a href="#">Tokyo</a></li>
            <li><a href="#">Kyoto</a></li>
            <li><a href="#">Nagasaki</a></li>
            <li><a href="#">Sapporo</a></li>
            <li><a href="#">Okinawa</a></li>
            <li><a href="#">Nagoya</a></li>
          </ul>
        </div>
        <!-- DESCRIPTION -->
        <div class="description-section">
          <div class="description-text">
            <p>Amazing Places to enjoy your Travel</p>
            <p class="overflow-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tincidunt elit eu elit commodo vestibulum. Phasellus tristique
              enim vel felis venenatis dignissim. Aliquam consectetur libero
              quis mollis ultrices. Mauris consectetur condimentum nisi, sed
              tincidunt nibh sagittis quis. Phasellus pulvinar porta ex in
              scelerisque. Donec sodales purus in arcu malesuada porta. Sed eget
              facilisis urna, in scelerisque erat. Cras luctus velit et ultrices
              viverra. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Donec elementum vulputate
              augue, finibus efficitur eros porta ut. Vivamus hendrerit mi eros,
              sed vestibulum orci placerat nec. Nam sed urna sit amet tortor
              viverra dapibus eget ac metus. Fusce vestibulum quis mauris
              posuere tincidunt. Mauris lobortis, lectus sed suscipit luctus, ex
              diam hendrerit tortor, sit amet tempor nunc turpis sed mi. Quisque
              quam nisl, feugiat gravida ipsum eu, congue facilisis nunc. Sed
              pretium ac nisi in efficitur. Aenean tortor metus, gravida eget
              scelerisque dictum, ornare id augue. Aliquam at nunc velit. Donec
              quis nisl eu lectus aliquet ornare at ac massa. Nunc a dui mattis
              ante tincidunt tempus eleifend eu nunc. Fusce nec feugiat metus.
              Fusce accumsan nisi interdum ipsum condimentum luctus. Suspendisse
              odio elit, mattis quis dapibus vel, porta eget metus. Praesent
              tempus, sem sed sollicitudin ornare, urna leo lobortis ex, sit
              amet dapibus nisl arcu eu urna. Curabitur sed tortor in nunc
              pulvinar tincidunt quis mattis nisl. Sed hendrerit mi sapien, ut
              ullamcorper est laoreet sed. Mauris sed auctor diam. Cras posuere
              dolor sed orci finibus feugiat. Suspendisse potenti. In libero
              dui, aliquam a justo eu, lacinia fringilla enim. Phasellus
              ultricies faucibus tellus id varius. Suspendisse tristique sapien
              nec ex elementum consectetur. In molestie ullamcorper mauris.
              Suspendisse accumsan pulvinar porta. Cras gravida faucibus nulla a
              pretium. Vestibulum hendrerit, lorem vestibulum rhoncus mattis,
              sapien dolor pellentesque magna, sed blandit ipsum velit vitae
              orci. Proin vitae tempor urna. Pellentesque ornare euismod diam,
              eget egestas massa sagittis sit amet. Aliquam cursus diam sed quam
              volutpat finibus. Etiam ac tortor vel dui semper iaculis. Proin at
              lectus fermentum, ornare ante ac, euismod augue. Curabitur non
              mattis quam. Nunc nec dolor erat. Etiam ac magna cursus, ornare
              nunc ut, volutpat neque. Pellentesque magna orci, scelerisque eu
              arcu vitae, dapibus tempor nulla. Fusce tortor urna, eleifend sit
              amet ex nec, ultrices suscipit velit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Morbi ullamcorper gravida eros sed pretium. Fusce eu accumsan
              quam, vitae aliquam arcu. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Sed
              convallis, massa blandit dictum tincidunt, dolor diam eleifend
              nisi, vitae elementum nibh augue eu augue. Mauris ullamcorper
              dignissim sodales. Morbi urna dui, imperdiet ut ex non, auctor
              maximus erat. Integer diam libero, imperdiet scelerisque urna eu,
              tempor bibendum est. Quisque id finibus turpis. Ut blandit
              facilisis leo, efficitur suscipit enim. Phasellus ullamcorper orci
              et urna gravida varius. Mauris placerat, justo a semper rutrum,
              magna ante consectetur metus, vel imperdiet arcu ante eget nisi.
              Sed facilisis finibus congue. Phasellus vestibulum vel quam at
              posuere. Aliquam lorem risus, placerat vitae pharetra nec, mollis
              id neque. Integer convallis ornare urna ac congue.
            </p>
          </div>

          <div class="description-image">
            <img src="https://imgur.com/vjBuYfC.png" alt="" />
          </div>
          <div class="specialButton">
            <button>Next</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('description-component', ConentDescription);
