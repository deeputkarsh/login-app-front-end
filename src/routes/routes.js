import LandingPage from './LandingPage'
import Login from './Login'
import Signup from './Signup'
import NotFound from './NotFound'
const ROUTES = [
  { path: '/', component: Login, exact: true },
  { path: '/404', component: NotFound, exact: true },
  { path: '/login', component: Login, exact: true },
  { path: '/signup', component: Signup, exact: true },
  { path: '/dashboard', component: LandingPage, exact: true }
]

export default ROUTES
