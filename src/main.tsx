import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const Wrapper = location.search.toLowerCase().includes("nostrict")
  ? React.Fragment
  : React.StrictMode;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Wrapper>
    <App />
  </Wrapper>,
)
