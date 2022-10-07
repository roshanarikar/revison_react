
import { useEffect, useState } from 'react'
import './App.css'
import { Loading } from './components/Loading'
import { TourComponents } from './components/TourComponents'
const url = 'https://course-api.com/react-tours-project'

function App() {
const [loading,setloading] = useState(true)
const [tours,setTour] = useState([])

const fetchTour = async () =>{
  setloading(true);
  try {
    
    const res = await fetch(url);
    const tours = await res.json()
    setloading(false);
    setTour(tours)
    console.log(tours)
  } catch (error) {
    setloading(false)
    console.log(error)
  }
}

useEffect(()=>{
  fetchTour()
},[])

if(loading){
  return(
    <div>
    <Loading/>
  </div>
  )
}
  return (
    <div>
      <TourComponents tours={tours}/>
    </div>
  )
}

export default App
