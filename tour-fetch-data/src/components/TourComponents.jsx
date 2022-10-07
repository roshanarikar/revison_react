import { SingleTour } from "./SingleTour"


export const TourComponents = ({tours}) =>{
    return(
        <div>
            {
                tours.map((e)=>{
                    return(
                        <SingleTour key={e.id}  {...tours}/>
                    )
                })
            }
        </div>
    )
}