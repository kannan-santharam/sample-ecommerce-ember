import Route from '@ember/routing/route';
import { products } from '../data/product';
export default class ItemRoute extends Route {
  model(params) {
    const { itemId } = params;
    const product = products.find(({ id }) => id === itemId)
    return product;
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
