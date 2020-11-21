import React, { Fragment, useState,useEffect } from "react";
import Header from "../common/Header";
import Axios from "axios";
import { BASE_URL } from "../common/env";


export default function Watchvideo() {
  const [notice,setNotice]=useState([])
  const [setLoading]=useState("false")
  const [setError]=useState("false")

 
 
  useEffect(  ()=>{
    async function fetchData() {
   await Axios.get(`${ BASE_URL }/auth/notice`).then(res => {
    setNotice(res.data);
    //  console.log("Here")
    setLoading(true);
})
.catch(err => {
  console.log(err)
    setError(err.message);
    setLoading(true)
})}
fetchData();
 },[setError,setLoading])


 const noticelist=
 notice.map((noticeitem,index)=>{
  return( <div key={index} className="card card-body shadow mt-3"><table><tr ><h4 style={{color:"gold"}}>{noticeitem.subject}</h4>  
      <p>{'('+(index+1) +') '+noticeitem.notice}</p></tr></table></div> )
 }
 )
      
    


  return (
    <Fragment>
      <Header />
      <form>
      <div className="container mt-5">
        <div className="col-sm-10 offset-1 card card-body shadow"> 
             <div className="maindiv">
             {noticelist} 
            </div>
      

             </div>
      </div>
      </form>
    </Fragment>
  );

}
