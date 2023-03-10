import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ProductComponent extends Component {
  @service('shopping-cart') cart;

  productImage = this.args.product.colors[0].image;

  toggleZoom() {
    return false;
  }
}
