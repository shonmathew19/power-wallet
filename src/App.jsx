
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
import About from './pages/About'
import ComplaintForm from './pages/ComplaintForm'


function App() {
  const [role, setRole] = useState(null);
  
  
  return (
    <>
      <Header role={role} setRole={setRole} />
      <Routes>
        <Route path='/' element={<Home setRole={setRole} />} />

        <Route path='/login' element={<Login setRole={setRole} />} />
        <Route path='/register' element={<Login register={'register'} />} />
        <Route path='/home' element={<Home setRole={setRole}/> } />
        <Route path='/new-connection' element={<NewConnection />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/consumer-info' element={<ConsumerInfoForm />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/admin-page-consumer-info' element={<AdminPageConsumerInfo/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/complaint-form' element={<ComplaintForm />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
