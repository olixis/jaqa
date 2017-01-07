const routes = [
  {
    path: '/dashboard',
    component: 'dashboard/index',
    children: [
      {path: '/dashboard', component: 'dashboard/components/index', name: 'dashboard.index'},
      {path: '/dashboard/home', component: 'dashboard/components/index', name: 'dashboard.home'}
    ]
  }
];

export default routes;
