import React from "react";

import ReactDOM from "react-dom/client";


const Header = () =>{
    return(
        <div className="header">
<div className="logo-container">
<img className="logo" src ="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?semt=ais_hybrid"></img>
</div>
<div className="nav-items">
<ul >
<li>Home</li>
<li>About us</li>
<li>Cart</li>
<li>Login</li>
</ul>
</div>
        </div>
    )
}


const stylecard = {
    backgroundColor: "#f0f0f0",
}
const resobj = {
  cards: [
    {
      info: {
        id: "3406455",
        name: "RNR Biryani",
        cloudinaryImageId: "jhdvenc7dkmypffoigf",
        cuisines: ["Biryani", "South Indian"],
        costForTwo: "₹350 for two",
      },
    },
    {
      info: {
        id: "1234564",
        name: "A2B",
        cloudinaryImageId: "abcd1234",
        cuisines: ["South Indian"],
        costForTwo: "₹300 for two",
      },
    },
    {
      info: {
        id: "1234569",
        name: "A2B",
        cloudinaryImageId: "abcd1234",
        cuisines: ["South Indian"],
        costForTwo: "₹300 for two",
      },
    },
    {
      info: {
        id: "1234568",
        name: "A2B",
        cloudinaryImageId: "abcd1234",
        cuisines: ["South Indian"],
        costForTwo: "₹300 for two",
      },
    },
    {
      info: {
        id: "1234567",
        name: "A2B",
        cloudinaryImageId: "abcd1234",
        cuisines: ["South Indian"],
        costForTwo: "₹300 for two",
      },
    },
    {
      info: {
        id: "123456",
        name: "A2B",
        cloudinaryImageId: "abcd1234",
        cuisines: ["South Indian"],
        costForTwo: "₹300 for two",
      },
    },
    {
      info: {
        id: "1234562",
        name: "A2B",
        cloudinaryImageId: "abcd1234",
        cuisines: ["South Indian"],
        costForTwo: "₹300 for two",
      },
    },
    {
      info: {
        id: "1234563",
        name: "A2B",
        cloudinaryImageId: "abcd1234",
        cuisines: ["South Indian"],
        costForTwo: "₹300 for two",
      },
    },
  ],
};

    



const RestaurantCard = ({resData})=>{
    if (!resData) return null;


const imageId=resData.cloudinaryImageId?.split('/').pop();


    return(
        <div className="res-card" style={stylecard}>
            <img className="res-img"alt="res-img" src={imageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,w_660/${imageId}`
            : "https://via.placeholder.com/250x150?text=No+Image"
}></img>
            <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(",")}</h4>
      <h4>{resData.costForTwo}</h4>
            <h4>4.8 stars</h4>
            <h4>40 minutes</h4>
        </div>
    )
}




const Body =()=>{

  const restaurantInfo = resobj.cards;
    return(
        <div className="body">
<div className="search">Search</div>
<div className="res-container">
{
  restaurantInfo.map((restaurant)=>(
    <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
  ))
}



</div>
        </div>

    )
}


const AppLayout = () => {
return (
    <div className="app"> 
    <Header/>
    <Body/>
    


    
    
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<AppLayout/>);

    