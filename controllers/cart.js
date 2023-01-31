import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return this.subtotal * 0.21;
  }

  get total() {
    return this.tax + this.subtotal;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    item.count = count >= 0 ? count : 0;
  }
}
