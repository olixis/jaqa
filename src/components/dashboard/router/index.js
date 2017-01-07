const routes = [
  {
    path: '/dashboard',
    component: 'dashboard/index',
    children: [
      {
        path: '/dashboard',
        component: 'dashboard/components/index',
        name: 'dashboard.index'
      },
      {path: '/dashboard/home', component: 'dashboard/components/index', name: 'dashboard.home'},
      {
        path: '/dashboard/registration/finances',
        component: 'dashboard/components/registration/finances/index',
        name: 'dashboard.registration.finances'
      },
      {
        path: '/dashboard/registration/finances/add',
        component: 'dashboard/components/registration/finances/add',
        name: 'dashboard.registration.finances.add'
      }
    ]
  }
];

export default routes;
