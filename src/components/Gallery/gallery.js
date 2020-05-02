import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./images";
import Images from "./Photos"
import './gallery.css';

/* popout the browser and maximize to see more rows! -> */
const Photos=()=>{
 return(

     <div>
     <div  style={{padding:"10px"},{marginTop:"15px"}}>
       <h1 style={{textAlign:'center'}}>Some stunning Memories!</h1>
       <div className="zoom">

       <Images/>
       </div>
      </div> 
     
     </div>
 )

}


export default Photos;
