import React from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Header } from "./components/Header"
import { Button } from "./components/ui/Button"
import { Footer } from './components/Footer'



export const App = () => {
export const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Button className>Button</Button>
      </div>
      <Footer />
    </>
  )
}
