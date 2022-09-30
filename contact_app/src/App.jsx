import { ContactAdd } from "./components/ContactAdd"
import { ContactList } from "./components/ContactList"
import { Header } from "./components/Header"


function App() {
  const contact = [
    {
      id: 1,
      name : "Roshan",
      email: "roshan@gmail.com"
    },
    {
      id: 2,
      name : "Akshay",
      email: "akshay@gmail.com"
    }
  ]
  return (
    <div>
     <Header/>
     <ContactAdd/>
     <ContactList contact={contact}/>
    </div>
  )
}

export default App
