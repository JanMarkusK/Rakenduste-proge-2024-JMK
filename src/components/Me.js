import React from "react";
import "../css/Me.css"

const Me = ({ name = "" }) => {

   return (
      <>
         <div class = "flexboxDeluxe">
            <h2>{name}</h2>
            <ul>
               {["Ajalugu", "Kunst", "Mängud", "Lugemine"].map(hobby => (
                  <li>{hobby}</li>
               ))}
            </ul>
            <form>
               <label>Email</label>
               <input type="email" id="email"></input>

               <label>Message</label>
               <input type="text" id="message"></input>

               <button type="submit">Send</button>
            </form>
         </div>
      </>
   );
};

export default Me;