import axios from "axios";
import { useEffect, useState } from "react";
import "./dataFetch.css"

export const DataFetch = () =>{
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get("https://api.unsplash.com/photos/?client_id=6oibM5WhoAcssVAIGBF1d5bXlp2gxOyZ6FCoYaIYq5I")
            .then((res)=>{
            setData(res.data)
            setLoading(false)
            setError(false)
            console.log(res.data)
          })
          .catch((err)=> {
            setLoading(true)
            setError(true)
            console.log(err)
          })
  },[])

    return(
        <div>
            <h1>Unsplash Data</h1>
            <div className="main">
               { loading ? <h3>...Loading</h3> :
                data.map((e)=>(
                        <div key={e.id} className="item">
                           <div>{e.alt_description}</div>
                           <div><img src={e.urls.small}/></div>
                        </div>
                    )
                )
               }
            </div>
        </div>
    )
}