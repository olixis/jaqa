const routes = [
  {
    path: '/home',
    component: 'home/index',
    name: 'home',
    children: [
      {path: '/', component: 'home/components/@index', name: 'home.index'},
      {path: '/home/resources', component: 'home/components/resources', name: 'home.resources'},
      {path: '/home/apps', component: 'home/components/apps', name: 'home.apps'},
      {path: '/home/who-we-are', component: 'home/components/who-we-are', name: 'home.who-we-are'}
    ]
  }
];

export default routes
