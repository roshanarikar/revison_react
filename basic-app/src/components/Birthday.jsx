import { useState } from "react"
import data from "./data"

export const Birthday = () =>{

    const [ geta, setData ] = useState(data)
    
    return(
        <div>
            <div>Todays Birthday {geta.length}</div>
            <div>
                {
                    geta.map((e)=>{
                        return(
                            <div key={e.id}>
                              <div><img width="100px" height="80px" src={e.image} alt="" /></div>
                              <div>{e.name}</div>
                              <div>{e.age}</div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => setData([])} >Clear All</button>
        </div>
    )
}