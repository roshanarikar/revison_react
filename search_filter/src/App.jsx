import { useState } from 'react'
import './App.css'
import mockData from "./MOCK_DATA.json"

function App() {
  const [data, setData] = useState("")
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={(e) => {
        setData(e.target.value)
      }} />
      {
        mockData.filter((e) =>{
          if(data == ""){
            return e
          }
          else if(e.first_name.toLowerCase().includes(data.toLowerCase())){
            return e
          }
        }).map((e)=>{
          return(
            <div key={e.id}>
              <div className='paragraph'><p>{e.first_name}</p></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
