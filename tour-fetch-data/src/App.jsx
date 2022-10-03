
import { useEffect, useState } from 'react'
import './App.css'
import { Loading } from './components/Loading'
import { TourComponents } from './components/TourComponents'
const url = 'https://course-api.com/react-tours-project'

function App() {
const [loading,setloading] = useState(true)
const [tour,setTour] = useState(true)

const FetchTour = async () =>{
  try {
    setloading(false);
  const res = await fetch(url);
  const tour = await res.json()
  setTour(tour)
  console.log(tour)
  } catch (error) {
    setloading(false)
    setTour(false)
    console.log(error)
  }
}

useEffect(()=>{
  FetchTour()
},[])

if(loading){
  return(
    <div>
    <Loading/>
  </div>
  )
}
  return (
    <div className="App">
      <TourComponents/>
    </div>
  )
}

export default App
