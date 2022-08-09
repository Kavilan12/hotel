import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Form from "./Form"
function Home()
{
    return(
        <>
        <Navbar/>
        <Carousel/>
        







        <img className="background image" src="https://static.wixstatic.com/media/05e3dc_875e59fd2b77402297c54466ccee4b58.jpg/v1/fill/w_1919,h_620,al_c,q_85,enc_auto/05e3dc_875e59fd2b77402297c54466ccee4b58.jpg" width="100%"></img>
<br/><br/>
<div class="card-group">
      <div class="card">
          <div class="card-body">
              <h4 className="text-primary">Activities</h4>
              <p>I'm a paragraph. Click here to add your own text and
                 edit me. I’m a great place for
                 you to tell a story and let
                  your users know a little more about you.</p>
                  <button className="btn btn-outline-primary">Read More</button>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
              <h4 className="text-primary">Rooms & Rates</h4>
              <p>I'm a paragraph. Click here to add your own text and edit me. I’m 
                a great place for you to tell a
                 story and let your users know a little more about you.</p>
                 <button className="btn btn-outline-primary">Read More</button>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
              <h4 className="text-primary">Location</h4>
              <p>I'm a paragraph. Click here to add your own text and edit me.
                 I’m a great place for you to tell a
                story and let your users know a little more about you.</p>
                  <button className="btn btn-outline-primary">Read More</button>
          </div>
      </div>
</div>
<br/><br/>
        </>
    );
}
export default Home;
