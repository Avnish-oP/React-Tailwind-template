import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-red-600 text-xl'>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

export default App
