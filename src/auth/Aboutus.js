import React, { Fragment } from "react";
import Header from "../common/Header";


export default function Aboutus() {



 
       
      
        
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
      <h4 style= {{fontWeight:"1000px", textAlign:'center',color:'purple'}}>About De Aviel College</h4>
        <div className="col-sm-10 offset-1 card card-body shadow"> 
             <div className="Aboutus">
             
             {/* <h6>Welcome to De Aviel Collage a place where every child is moulded with the
                spirit of excellent.
                Our aim is to give the best choice for their unique goals in life.

                In Aviel College, we believe every child  is an active agent...a unique learning organism but
                depending on the degree of freedom that child has t o experience and explore his or her environment.
                Thus, the child is either expose or limited intellectually.
             </h6> */}
             <img src={'https://res.cloudinary.com/helping-hands-for-active-people/image/upload/v1601021928/profiles/Aboutdeavielcollege.jpg'} alt='pix' style={{width:'150%',height:'130%', objectPosition: '-150px -30px'}}/>
       
            </div>
        


             </div>
      </div>
    </Fragment>
  );

}
