import React from "react";

import ReactDOM from "react-dom/client";
import Header from "./Component/Header.js";
import Body from "./Component/Body.js";




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

    console.log(parent)