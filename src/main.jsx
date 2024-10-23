import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import RoleContext from './context/RoleContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoleContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoleContext>


  </StrictMode>,
)
