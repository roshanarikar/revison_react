import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [ tempCount, setTempCount] = useState(10)
  const [tempColor, setTempColor] =  useState("cold")

  const increseTemp = () => {
    let incTemp = tempCount+1

    if(incTemp>15){
      setTempColor("hot")
    }

    setTempCount(incTemp)
  }

  const decreseTemp = () => {
    let decTemp = tempCount-1

    if(decTemp<=15){
      setTempColor("cold")
    }
    setTempCount(decTemp)
  }

  return (
    <div className="App">
           <div>
            <div>
              <div className={`box ${tempColor}`}>
                {tempCount} C
              </div>
            </div>
            <div>
              <button onClick={()=> decreseTemp()}>-</button>
              <button onClick={()=> increseTemp()}>+</button>
            </div>
           </div>
    </div>
  )
}

export default App
