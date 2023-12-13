import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Blog from '../src/pages/Blog'
import Contact from '../src/pages/Contact'
import Error from '../src/pages/Error'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import ForgetPassword from './pages/ForgetPassword'
import CreacteAccount from './pages/CreacteAccount'
import Admin from './Admin/Admin'
import AddBlog from './Admin/AddBlog'
import BlogList from './Admin/BlogList'
import UserList from './Admin/UserList'
import ContactMassage from './Admin/ContactMassage'
import Dashboard from './Admin/Dashboard'
import Navbar from './components/Navbar'
import AdminNav from './components/AdminNav'
import Post from './pages/Post'
function App() {
  const hideNavbarRoutes = [
    '/dashboard',
    '/admin',
    'addblog',
    '/bloglist',
    '/userlist',
    '/contactmassage',
  ];

  const shouldHideNavbar = hideNavbarRoutes.some(route => window.location.pathname.includes(route));
  const renderNavbar = shouldHideNavbar?<AdminNav />:<Navbar />
  return (
    <BrowserRouter>
      {renderNavbar}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path='/blog/:title' element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />}/>
        <Route path = '/user-profile' element={<UserProfile />} />
        <Route path='/reset-password' element={<ForgetPassword/>} />
        <Route path='/create-account' element = {<CreacteAccount />} />
        <Route path="*" element={<Error />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/addblog' element={<AddBlog />} />
        <Route path='/bloglist' element={<BlogList />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contactmassage' element = {<ContactMassage />} />
        <Route path='/userlist' element={<UserList />} />
        {/* <Route path='/blog/:title' element={<Post />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App