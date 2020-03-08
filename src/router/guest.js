import Home from '../views/Guest/Home';
import Loan from '../views/Guest/Loan';
import Login from '../views/Guest/Login';
import Register from '../views/Guest/Register';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/loan',
    name: 'loan',
    component: Loan
  },
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