import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
function Contact()
{
    return(
        <>
        <Navbar/>
        <Carousel/>
           <h1 className="text-primary">Contact</h1>
     <br/><br/>
     <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
      Just click “Edit Text” or double click me and you can
       start adding your own content and make changes to the font. I’m a great place 
      for you to tell a story and let your 
      users know a little more about you.</p>
      <br/><br/>
      <form>
      <input className="pqr" placeholder="Name" type="name" size="50"></input><br/><br/>
      <input className="pqr" placeholder="Email" type="email" size="50" name="email" required></input><br/><br/>
      <input className="pqr" placeholder="Subject" type="subject" size="50"></input><br/><br/>
      <td><textarea className="pqr" rows="5" cols="50" placeholder="Message"></textarea></td>
      </form>

        </>
    )
}
export default Contact