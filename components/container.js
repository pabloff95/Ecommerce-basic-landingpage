import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ContainerComponent extends Component {
  @service('shopping-cart') cart;

  get itemCount() {
    let total = this.cart.itemList.reduce((total, item) => {
      return (total += parseInt(item.count));
    }, 0);

    return total.length > 1 && total[0] == '0' ? total.substring(1) : total;
  }
}
