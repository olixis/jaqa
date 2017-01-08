
import categories from '../components/registration/category/routes';

let routes = [
  {
    path: '/dashboard',
    component: 'dashboard/index',
    children: [
      {path: '/dashboard/home', component: 'dashboard/components/index', name: 'dashboard.home'},
      ...categories
    ]
  }
];

/**
 * @param routes
 * @returns {*}
 */
const requiresAuth = (routes) => {
  routes.forEach((route) => {
    if (route.children) {
      // noinspection JSUndefinedPropertyAssignment
      route.children = requiresAuth(route.children);
    }
    // noinspection JSUndefinedPropertyAssignment
    route.meta = {
      requiresAuth: true
    };
  });
  return routes;
};

routes = requiresAuth(routes);

export default routes;
