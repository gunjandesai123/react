import RestaurantCard from "./RestaurantCard";
import resLists from "../utils/mockData";


const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resLists.map((element,index) => (
                        <RestaurantCard key={index} resData = {element}/> 
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body;