import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import Header from './layouts/Header/header.jsx'
import Footer from './layouts/Footer/footer.jsx'
import { AuthProvider } from '../src/auth/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)