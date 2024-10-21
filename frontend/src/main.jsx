import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext.jsx";
import {SocketContextProvider} from "./context/SocketContext.jsx";
import './index.css'; // Adjust the path if necessary

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <BrowserRouter>
          <AuthContextProvider>
              <SocketContextProvider>
                  <App/>
              </SocketContextProvider>
          </AuthContextProvider>
      </BrowserRouter>
  </StrictMode>,
)
