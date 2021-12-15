import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import NavBar from './components/NavBar/NavBar'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Main />
    </div>
  )
}

export default App
