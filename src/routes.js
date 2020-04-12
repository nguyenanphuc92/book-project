import React from 'react';

const Main = React.lazy(() => import('./components/views/Main/Main'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/main', name: 'Main', component: Main },
];

export default routes;
