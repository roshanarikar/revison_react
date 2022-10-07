import { useState } from "react"


export const SingleTour = ({id,image,info,price,name,removeTour}) =>{
    const [readMore,setReadMore] = useState(false)
    return(
        <div>
            <img src={image} alt="" />
            <div>
                <div>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "read more"}
                    </button>
                </p>
                <button onClick={() => removeTour(id)}>not interested</button>
            </div>
        </div>
    )
}