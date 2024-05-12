import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainComponent from './components/MainComponent/MainComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <MainComponent />
      </BrowserRouter>
    </>
  )
}

export default App