import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Modal from './Components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='flex justify-center'>
    <Products/>
    </div>
    <Modal/>
    </>
  )
}

export default App
