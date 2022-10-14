import { SingleTour } from "./SingleTour"

export const TourComponents = ({tours, removeTour}) =>{
    return(
        <div>
            Our Tours
            {
                tours.map((e)=>{
                    return(
                        <SingleTour key={e.id}  {...e}  removeTour={removeTour}/>
                    )
                })
            }
        </div>
    )
}