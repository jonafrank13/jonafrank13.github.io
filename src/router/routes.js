
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/skills', component: () => import('pages/Skills.vue') },
      { path: '/experience', component: () => import('pages/Experience.vue') },
      { path: '/projects', component: () => import('pages/Projects.vue') },
      { path: '/education', component: () => import('pages/Education.vue') },
      { path: '/you', component: () => import('pages/You.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
