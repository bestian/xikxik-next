import HelloWorld from 'components/HelloWorld';
import Custom from 'components/Custom';
import EditPoet from 'components/EditPoet';
import EditNews from 'components/EditNews';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: HelloWorld, name: 'HelloWorld' },
      { path: 'custom', component: Custom, name: 'Custom' },
      { path: 'editpoet', component: EditPoet, name: 'EditPoet' },
      { path: 'editnews', component: EditNews, name: 'EditNews' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
