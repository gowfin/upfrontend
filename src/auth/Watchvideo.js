import React, { Fragment, useState,useEffect } from "react";
import Header from "../common/Header";
import ReactPlayer from "react-player";
import Axios from "axios";
import { BASE_URL } from "../common/env";


export default function Watchvideo() {
  const [video,setVideo]=useState([])
  const [setLoading]=useState("false")
 const [setError]=useState("false")

 //const [loading,setLoading]=useState("false")
 //const [error, setError]=useState("false")
 
 
 
  useEffect(  ()=>{
    async function fetchData() {
   await Axios.get(`${BASE_URL}/auth/videos`).then(res => {
    setVideo(res.data);
    // console.log("Here")
    setLoading(true);
})
.catch(err => {
  console.log(err)
    setError(err.message);
    setLoading(true)
})}
fetchData();
 },[setError,setLoading])


 const videolist=
 video.map((videoitem,index)=>{
  return( <div key={index} className="card card-body shadow mt-3"><table><tr ><h4 style={{color:"gray"}}>{videoitem.title}</h4> <ReactPlayer  
      url={`https://www.youtube.com/embed/${videoitem.path}`}   controls="true" width="30" height="40"/></tr></table></div> )
 }
 )
      
    


  return (
    <Fragment>
      <Header />
      <form>
      <div className="container mt-5">
        <div className="col-sm-10 offset-1 card card-body shadow"> 
             <div className="maindiv">
             {videolist} 
            </div>
      

             </div>
      </div>
      </form>
    </Fragment>
  );

}
