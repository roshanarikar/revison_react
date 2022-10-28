import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [ tempCount, setTempCount] = useState(10)
  const [tempColor, setTempColor] =  useState("cold")

  const increseTemp = () => {
    setTempCount(tempCount+1)

    if(tempCount>15){
      setTempColor("hot")
    }
  }

  const decreseTemp = () => {
    setTempCount(tempCount-1)

    if(tempCount<=15){
      setTempColor("cold")
    }
  }

  return (
    <div className="App">
           <div>
            <div>
              <div className='box'>
                {tempCount} C
              </div>
            </div>
            <div>
              <button onClick={()=> setTempCount(tempCount-1)}>-</button>
              <button onClick={()=> setTempCount(tempCount+1)}>+</button>
            </div>
           </div>
    </div>
  )
}

export default App
