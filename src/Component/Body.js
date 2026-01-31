const Body =() =>{

const listofRestaurants =[
    {
data: {
id: "255655",
name: "Cake & Cream",
cloudinaryImageId: "ac57cc371e73f96f812613f58457aca3",
areaName: "Jairaj Nagar",
costForTwo: "₹200 for two",
cuisines: ["Bakery", "Hot-dog", "pastery", "Cake", "puff"],
avgRating: 4.3,
veg: true,
parentId: "54670",
avgRatingString: "4",
totalRatingsString: "20+",
},
}
]



    
    return(
        <div className="body">
<div className="filter">
    <button className="filter-btn" onClick={()=>{
        console.log("button clickrd")
    }}>Top Rated Restaurants</button>
</div>
<div className="res-containers" >{listofRestaurants.map((restaurant)=>(
<RestaurantCard key={restaurant.data.id} resData={restaurant}/>
))}</div>
        </div>
    )
}

export default Body;
