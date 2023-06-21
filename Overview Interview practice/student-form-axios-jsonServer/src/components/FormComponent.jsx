import axios from "axios"
import { useState } from "react"

export const FormComponent = () =>{
 const [ field,setField] = useState({
  id : "",
  name : "",
  email : "",
  mobile : "",
  class : ""
 })

 const handleSubmit = async (e) =>{
   e.preventDefault()

   try {
    const response = await axios.post('http://localhost:8080/form', field);

    if (response.status === 201) {
      console.log('Form submitted successfully!',field);
      // Clear the form fields
      setField(field);
    } else {
      console.error('Form submission failed!');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
 }

 const handleChange = (e) =>{
  const {name, value} = e.target;
  setField((prevField)=>({
    ...prevField,
    [name]: value
  }))
 }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={field.name} onChange={handleChange}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={field.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Mobile No.</label>
          <input type="text" name="mobile" value={field.mobile} onChange={handleChange}/>
        </div>
        <div>
          <label>Class</label>
          <input type="text" name="class" value={field.class} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}