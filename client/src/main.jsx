import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Sentiment from './components/Sentiment'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fo4n8lfjg77mabd3.us.auth0.com"
      clientId="GE47Y8e0efmDaESRQdpUUtSnurbao6LB"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
    }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
