import { ContactCard } from "./ContactCard"


export const ContactList = (props) =>{

    return(
        <div>
            <div>Contact List</div>
            {
            props.contact.map((e)=>{
                return(
                  <ContactCard contact={e}/>
                )
            })}
            
        </div>
    )
}