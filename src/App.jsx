
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NewConnection from './pages/NewConnection'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login register={'register'} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-connection' element={<NewConnection />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
      </Routes>
      
    </>
  )
}

export default App
