import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './Components/A'
import B from './Components/B'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <A />
        <B />
      </div>
    </>
  )
}

export default App
