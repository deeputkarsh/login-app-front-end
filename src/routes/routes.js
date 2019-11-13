import LandingPage from './LandingPage'
import Login from './Login'
import Signup from './Signup'
import NotFound from './NotFound'
import Profile from './Profile'

export default [
  { path: '/', component: Login, exact: true },
  { path: '/404', component: NotFound, exact: true },
  { path: '/login', component: Login, exact: true },
  { path: '/signup', component: Signup, exact: true },
  { path: '/dashboard', component: LandingPage, exact: true },
  { path: '/profile', component: Profile, exact: true }
]
