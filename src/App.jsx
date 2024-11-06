import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'
import Newsitems from './components/Newsitems'

function App() {
  const [count, setCount] = useState(0)
  const [category,setCategory] = useState('general')

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </>
  )
}

export default App
