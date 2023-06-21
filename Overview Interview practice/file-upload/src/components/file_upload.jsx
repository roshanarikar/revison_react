import { useState } from "react";

export const FileUpload = () =>{
    const [file, setFile] = useState(null);

    const handleFileInputChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => console.log("File uploaded"))
    
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Upload</button>
      </form>
    );
}