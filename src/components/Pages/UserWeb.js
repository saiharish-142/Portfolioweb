import React from "react";
import { Link } from "react-router-dom";
//import "../../App.css"
import "./Userwebcss.css"
import Footer from "../Footer";
import user1 from "../images/userwebpic.JPG"
import user2 from "../images/USERTRACK.JPG"
import user1vec from "../images/user1vec.jpg"


const userData =[
    {
        icon :<i  class="fas fa-location" style={{color:"343BFC7"}}></i>,
        title: "Book and track from anyplace",
        desc:"person can book from anyplace from the world",
    },
    {
        icon :<i class="fas fa-video"  style={{color:"#B2C248"}}></i>,
        title: "Live feed to hospital and doctor",
        desc:"person can book from anyplace from the world",
    },
]

const howData =[
    {
        title : "Search and select the hospitals nearby",
        desc : "User can search hospital according to his location. Person can book from anyplace from the world"
         
    },
    {
        title : "Book an Ambulance and premedication in ambulance",
        desc : "User can book and ambulance by calling to the hospital authority and send them the exact location"
    },  
    {
        title : "Track Ambulance and connect to driver ",
        desc : "After accepting the ride, you can track and get in touch with ambulance driver "
    },
    {
        title : "Live feed to hospital doctors ",
        desc : "user can directly send live feed to doctors and keep them steady "
    },
    {
        title : "Premedication ",
        desc : "By the time patient arrives to hospital, hospital help be ready with the premediction that is to be done  "
    },
]

export default function UserWeb() {

    return (
        <>
        <div className="usercontainer">
            
            <div className="maincont">
                <div className="col1">
 <div className="heading1">
     User Website
</div>
<div className="button">
    <button  className="butn" onClick={()=>window.location.replace('https://user.prioritypulse.co.in/login')}> Book an Ambulance</button>
</div>
</div>
<div className="col2">
<div className="desc">
    <p>
    We built a User Website which serves patient  to book and track an ambulance from any remote location 
This website help user to navigate at the exact spot of emergency, send live feed of  patient updates on condition and it serves the main part of the premedication
    </p>
</div>
</div>
</div>


<div className="useswrapper">
   
<div className="column1">
<div className="heading">
Why Choose us ?
    </div>
{userData.map((item, index)=>{
                     return(
                         <div className="StatsBox" key="index">
                           <div className="Icon">{item.icon}</div>
                           <div className="Title">{item.title}</div>
                           <div className="Desc">{item.desc}</div>
                         </div>
                     )
                 })}        
</div>
<div className="column2">
 <img className="user1vec" src={user1vec} />
</div>
</div>


<div className="howcontainer">
<div className="coln1" >
<div className="heading">
How it Works ?
    </div>
            <div className="col1inside">
            {howData.map((item, index)=>{
                     return(
                         <div className="howData" key="index">
                           <div  className="Titleh" >{item.title}</div>
                           <div className="Desch">{item.desc}</div>
                         </div>
                     )
                 })}  
             
                
            </div>
            </div>
            <div className="coln2">
            <div > 
                    <h4>Book Ambulance</h4>
                    <img className="user1pic" src={user1}  />
                    </div>
                <div>
                <h4>Track Ambulance</h4>
                <img className="user2pic" src={user2}  />
                </div>
            </div>

</div>

        </div>
        <Footer/>
        </>
    )
}