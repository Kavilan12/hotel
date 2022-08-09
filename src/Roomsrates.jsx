import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
function Roomsrates()
{
    return(
        <>
        <Navbar/>
        <Carousel/>
           <h1 className="text-primary">Rooms & Rates</h1>
  <br/><br/>
  <div class="card-group">
      <div class="card">
          <div class="card-body">
               <img src="https://static.wixstatic.com/media/fde015_6c05c2f649564c37a7b5acfd3a848e5b.jpg/v1/fill/w_240,h_170,q_85,usm_0.66_1.00_0.01/fde015_6c05c2f649564c37a7b5acfd3a848e5b.jpg" height="300" width="100%"></img>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
              <h4>Junior Suite</h4>
              <p>Our Junior Suites offer breathtaking views of the city skyline.</p>
              <ul>
                <li>Size: 260 sq ft</li>
                <li>Beds: 2 Double(s)</li>
              </ul>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
              <h4 className="text-success">Price</h4>
              <br/>
              <i><h3>From $250</h3></i>
              <br/>
              <a href="https://www.wix.com/website-template/view/html/1712?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Ftravel-tourism%2Fhotels-and-b-n-b-s&tpClick=view_button&esi=c2d3c0de-8dc0-4155-aa90-38a600715c5b#"><button className="btn-primary">More info</button></a>
          </div>
      </div>
  </div>
  <div class="card-group">
      <div class="card">
          <div class="card-body">
              <img src="https://static.wixstatic.com/media/fde015_597c7d9710e44a9d91514e0ac84fb653.jpg/v1/fill/w_240,h_170,q_85,usm_0.66_1.00_0.01/fde015_597c7d9710e44a9d91514e0ac84fb653.jpg" height="300" width="100%"></img>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
              <h4>Standard Room</h4>
              <p>Our Standard Rooms are the perfect combination of function and comfort.</p>
              <ul>
                <li>Size: 230 sq ft</li>
                <li>Beds: 1 Double(s)</li>
              </ul>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
          <h4 className="text-success">Price</h4>
              <br/>
              <i><h3>From $150</h3></i>
              <br/>
              <a href="https://www.wix.com/website-template/view/html/1712?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Ftravel-tourism%2Fhotels-and-b-n-b-s&tpClick=view_button&esi=c2d3c0de-8dc0-4155-aa90-38a600715c5b#"><button className="btn-primary">More info</button></a>
          </div>
      </div>
  </div>
  <br/><br/>
        </>
    );
}
export default Roomsrates;