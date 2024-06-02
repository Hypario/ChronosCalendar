import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <nav className={"navbar navbar-dark bg-primary mb-3"}>
          <a className={"navbar-brand"}>Mon calendrier</a>
      </nav>
        <App/>
    </React.StrictMode>,
)
