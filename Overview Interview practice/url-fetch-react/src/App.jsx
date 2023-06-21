import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=6oibM5WhoAcssVAIGBF1d5bXlp2gxOyZ6FCoYaIYq5I")
    .then(res => res.json())
    .then((res)=>{
      setData(res)
    })
    .catch(e=> console.log("Error",e))
  },[])
  return (
    
    <div className="App">
      <div>Data by fetch in React</div>
      <div className='gridBox'>
        {
          data.map((e)=>{
            return(
              <div key={e.id}>
                  <div>{e.id}</div>
              <div><img src={e.urls.small} alt="" /></div>
              </div>
            )   
          })
        }
      </div>
    </div>
  )
}

export default App
