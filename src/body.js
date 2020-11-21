
import React  from 'react';
import { Link } from "react-router-dom";

import   './common/App.css';





export default function bgimg(){
return(

        <div className="maindiv">

        <div className="slide_bg">
                <div>
                <h4><span><p className="displayfont">Welcome to De Aviel College. A place where every child is moulded with the spirit of excellence.
                <br></br> Our aim is to give the best choice for their unique goals in life.
                <br></br>Every child is an active agent...a unique learning organism but depending on the degree
                of freedom that the child has to experience and explore his or her environment,the child is either exposed 
                or limited intellectually.
                 </p></span></h4>
                 </div> 
        
      <div class="box box"><p  className="circle span"><Link   to='/form'><span>Admission form</span></Link></p></div>
      <div class="box box1"><p  className="circle span"><Link   to='/auth/login'><span>Check Result</span></Link></p></div>
      <div class="box box2"><p  className="circle span"><Link   to='/login'><span>Chat with us</span></Link></p></div>
      <div class="box box3"><p className="circle span"><Link   to='/aboutus'><span>About Us</span></Link></p></div>
      <div class="box box4"><p className="circle span"><Link   to='/Signup'><span>Sign-up</span></Link></p></div>
      <div class="box box5"><p className="circle span"><Link   to='/Watchvideo'><span>Enter Class Room</span></Link></p></div>
      <div class="box box6"><p className="circle span"><Link   to='/noticeboard'><span>Notice Board</span></Link></p></div>
        
        </div>
        <div className="childdiv1">
        {/* <iframe width="100" title="Lectures" height="100" src="https://www.youtube.com/embed/e5GwDEXnKyU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    */}

        </div>
    <div className="childdiv2">
                 
        </div>
        </div>       
)



}