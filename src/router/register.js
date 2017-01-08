
import { RouterLoader } from './loader';

// noinspection JSUnusedLocalSymbols
export const RouterRegister = {
  /**
   * Register modules routes
   * @param routes
   * @param module
   */
  register (routes, module) {
    // noinspection JSUnresolvedFunction
    module.forEach(function (route) {
      let component = route.component;
      if (typeof component === 'string') {
        component = RouterLoader.load(component);
      }
      const children = [];
      if (route.children && route.children.forEach) {
        RouterRegister.register(children, route.children);
      }
      routes.push({ path: route.path, component: component, name: route.name, meta: route.meta, children: children });
    });
  }
}
