const routes = [
  {
    path: '/auth',
    component: 'auth/index',
    name: 'auth',
    children: [
      {path: '/', component: 'auth/components/@index', name: 'auth.index'},
      {path: '/auth/register', component: 'auth/components/register', name: 'auth.register'},
      {path: '/auth/login', component: 'auth/components/login', name: 'auth.login'},
      {path: '/auth/logout', component: 'auth/components/logout', name: 'auth.logout'},
      {path: '/auth/reset', component: 'auth/components/reset', name: 'auth.recover'}
    ]
  }
];

export default routes
