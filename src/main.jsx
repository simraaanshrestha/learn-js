import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, Bounce } from 'react-toastify'
import MyContext from './context/MyContext.jsx'
// import ThemeContext from './context/ThemeProvider.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   </StrictMode>

      <>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />

    <MyContext>
      <ThemeProvider>
      <App />

      </ThemeProvider>
    </MyContext>
    </>
)
