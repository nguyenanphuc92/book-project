import React from 'react';

const Main = React.lazy(() => import('./components/views/Main/Main'));
const Category = React.lazy(() => import('./components/views/Category/Category'));
const Search = React.lazy(() => import('./components/views/Search/Search'));
const ReviewDetail = React.lazy(() => import('./components/views/ReviewDetail/ReviewDetail'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/main', name: 'Main', component: Main },
  { path: '/category', name: 'Category', component: Category },
  { path: '/search', name: 'Search', component: Search },
  { path: '/review-detail', name: 'ReviewDetail', component: ReviewDetail }
];

export default routes;
