import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
function Aboutus()
{
    return(
        <>
        <Navbar/>
        <br/>
        <Carousel/>
          <h1 className="text-primary">About Us</h1>
<br/><br/>
<h2 className="text-info">I am a title.
  Click here to add your own text and edit me.
</h2>
<br/><br/>
<div class="card-group">
      <div class="card">
          <div class="card-body">
              <i><p>I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me and you can s
                tart adding your own content and make changes to the font. 
                Feel free to drag and drop me anywhere you like on your page. I’m a great place for
                 you to tell a story and let your users know a little more about you.</p></i>

              <i><p>This is a great space to write long text about your company and 
                your services. You can use this space to go into a little more detail 
                about your company. Talk about your team and what services you provide. 
                Tell your visitors the story of how you came up 
                with the idea for your business and what makes you different from your competitors</p></i>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
             <i><p>At Wix we’re passionate about making templates that allow 
                you to build fabulous websites and it’s all thanks to the support
                 and feedback from users like you! Keep up to date with New Releases and 
                 what’s Coming Soon in Wixellaneous in Support. 
                Feel free to tell us what you think and give us feedback in the Wix Forum.</p></i>

              <i><p>If you’d like to benefit from a professional designer’s touch, head
                 to the Wix Arena and connect with one of our Wix Pro designers. Or if you
                  need more help you can simply type your questions into the
                   Support Forum and get instant answers. To keep up to
                 date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!</p></i>
          </div>
      </div>
      <div class="card">
          <div class="card-body">
              <img src="https://static.wixstatic.com/media/05e3dc_ff3b32a25f1b47c29703585a223f0f36.jpg/v1/fill/w_360,h_581,al_c,lg_1,q_80,enc_auto/05e3dc_ff3b32a25f1b47c29703585a223f0f36.jpg"></img>
          </div>
      </div>
  </div>
  <br/><br/>
        </>
    );
}
export default Aboutus;