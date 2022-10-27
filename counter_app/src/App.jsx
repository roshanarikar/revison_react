import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>Counter App</h3>
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={()=> setCount(count-1)}>Decrease</button>
      </div>
    </div>
  )
}

export default App
