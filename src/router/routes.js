import Dashboard from '../components/Dashboard'
import login from'../components/login'
import home from'../components/home'


import NotFound from '../components/NotFound'

export default[
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
      path: 'login',
      component: login
    },
    {
      path: 'home',
      component: home
    },
  {
    path: '*'
    name: 'NotFound',
    component: NotFound
  }
]
}
]
