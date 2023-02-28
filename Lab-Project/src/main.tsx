import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Calculator from './calculator'
import Student from './student'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    { <App /> }
    {/* <Calculator /> */}
    {/*<Student />*/}
  </React.StrictMode>,
)
