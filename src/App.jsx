import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Modal from './Components/Modal'
import useToggle from "./Hooks/useToggle";
function App() {
const { on, toggler } = useToggle();
  return (
    <>
    <Navbar/>
    <div className='flex justify-center'>
    <Products toggler={toggler}/>
    </div>
    {on && <Modal toggler={toggler} /> }
    </>
  )
}

export default App
