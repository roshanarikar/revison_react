import React from "react"

class ContactAdd extends React.Component {
    state = {
        name: "",
        email: "",
    }

    add = (e) =>{
        e.preventDefault()
        if(this.state.name === "" && this.state.email===""){
            alert("All fields are mandatory")
            return
        }
    }
    render(){
        return(
            <div>
            <form onSubmit={this.add}>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </div>
            <div>
                <button>Add</button>
            </div>
            </form>
        </div>
        )
    }
}


export default ContactAdd;