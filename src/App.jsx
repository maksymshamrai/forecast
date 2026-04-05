import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
