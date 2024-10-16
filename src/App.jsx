
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NewConnection from './pages/NewConnection'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ConsumerInfoForm from './pages/ConsumerInfoForm'
import AdminPageConsumerInfo from './pages/AdminPageConsumerInfo'
import Billing from './pages/Billing'
import { useState } from 'react'
import Dashboard from './pages/Dashboard'

function App() {
  const [role, setRole] = useState(null);
  
  return (
    <>
      <Header role={role} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setRole={setRole}/>} />
        <Route path='/register' element={<Login register={'register'} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-connection' element={<NewConnection />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/consumer-info' element={<ConsumerInfoForm />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/admin-page-consumer-info' element={<AdminPageConsumerInfo/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
