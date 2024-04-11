import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './Pages/DasgBoard'
import LoginPage from './Pages/Loginpage'
import RegisterPage from './Pages/RegisterPage'
import ForgotPage from './Pages/ForgetPage'
import ResetPage from './Pages/ResetPage'
import ShortUrlPage from './Pages/Shorturl'
import ShortListPage from './Pages/ShortPage'
import ActivationPage from './Pages/Activatepage'
import Externalpage from './Pages/Externalpage'


function App() {
  return (
    //Routes and Route is imported from react router dom to navigate between pages
    <Routes>
      <Route exact path='/' element={<DashboardPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/forgot' element={<ForgotPage/>}/>
      <Route path='/reset/:id' element={<ResetPage/>}/>
      <Route path='/shortUrl' element={<ShortUrlPage/>}/>
      <Route path='/urlList' element={<ShortListPage/>}/>
      <Route path='/activation/:id' element={<ActivationPage/>}/>
      <Route path='/new/:string' element={<Externalpage/>}/>
    </Routes>
  )
}

export default App