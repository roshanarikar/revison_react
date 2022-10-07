import { SingleTour } from "./SingleTour"


export const TourComponents = ({tours}) =>{
    return(
        <div>
            Our Tours
            {
                tours.map((e)=>{
                    return(
                        <SingleTour key={e.id}  {...e}/>
                    )
                })
            }
        </div>
    )
}