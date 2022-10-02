import { useState } from "react"
import { ContactAdd } from "./components/ContactAdd"
import { ContactList } from "./components/ContactList"
import { Header } from "./components/Header"


function App() {
  const [ contacts, setContact] = useState([])
  return (
    <div>
     <Header/>
     <ContactAdd/>
     <ContactList contact={contacts}/>
    </div>
  )
}

export default App
