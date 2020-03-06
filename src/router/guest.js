import Login from '../views/Guest/Login';
import Register from '../views/Guest/Register';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
];

export default routes