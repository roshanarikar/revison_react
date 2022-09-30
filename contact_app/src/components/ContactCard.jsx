

export const ContactCard = (props) => {
    const {id,name,email} = props.contact
    return(
        <div>
            <div>
                <div>{name}</div>
                <div>{email}</div>
            </div>
            <div></div>
        </div>
    )
}