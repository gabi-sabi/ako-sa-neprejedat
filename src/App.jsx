import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Header } from "./components/Header"
import { Button } from "./components/ui/Button"



export const App = () => {
  return (
    <>
      <Header />
      <Button>Hello Button</Button>
    </>
  )
}
