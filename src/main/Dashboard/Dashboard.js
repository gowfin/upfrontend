import React, { Fragment,useState,useEffect } from "react";
import {Modal} from "react-bootstrap";
import Header from "../../common/Header";
import Alert from '../components/Alert';
// import { Image } from 'cloudinary-react';
import { BASE_URL } from "../../common/env";
//import ReactPlayer from "react-player";

import axios from 'axios'
export default function Dashboard(xx) {
  
  const [file, setFile] = useState();
  const [image,setImage]=useState("")
  const [email, setEmail]=useState("")
  const [zoomLink,setZoomlink]=useState([])
 

  useEffect(  ()=>{
    
    

     ///FETCHING PROFILE PIX
     ///////////
     const sendGetRequest = async () => {
      setEmail(xx.match.params.email)
      try {
          const resp = await axios.get(`${BASE_URL}/auth/profileimage/${xx.match.params.email}`);
          if(resp.data.toString.length>0){
            setImage(resp.data);
            console.log(resp.data);
          }else{
            setImage("https://res.cloudinary.com/helping-hands-for-active-people/image/upload/v1602859081/profiles/upu6yfl5ucmocwmefsvv.png")
          }
          
           
        //  console.log(resp.data);
        //  console.log(xx.match.params.email);

      } catch (err) {
          // Handle Error Here
          setImage("https://res.cloudinary.com/helping-hands-for-active-people/image/upload/v1602859081/profiles/upu6yfl5ucmocwmefsvv.png")

          console.error(err);
      }
  };
  sendGetRequest()
     ////////////
     
     
     
      
    
    
  },[xx.match.params.email])
  //USE EFFECT FOR AVAILABLE ZOOM LINKS
  useEffect(  ()=>{
   


    ///FETCHING ZOOM LINKS
    ///////////
    const GetZoomlink = async () => {
     try {
         const resp = await axios.get(`${BASE_URL}/auth/zooms`);
        //  if(resp.data.toString.length>0){
            setZoomlink(resp.data);
           console.log(resp.data);
        //  }else{
          // setZoomlink([]);
        //  }
         
     } catch (err) {
         // Handle Error Here
         console.error(err);
     }
 };
 GetZoomlink()
    ////////////
    
    
    
     
   
   
 },[])


  const [requestEditProfile, setRequestEditProfile] = useState(false);
  const closeEditProfile = () => {
    setRequestEditProfile(false);
  };

 
  const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    // const [selectedFile, setSelectedFile] = useState();
    const [setSelectedFile] = useState();
    const [successMsg] = useState('');
    const [errMsg] = useState('');
    const handleFileInputChange = (e) => {
        const onefile = e.target.files[0];
        console.log(onefile) 
        previewFile(onefile);
        setSelectedFile(onefile);
        setFileInputState(e.target.value);
        setFile(e.target.files[0])
    };

    const previewFile = (inputfile) => {
        const reader = new FileReader();
        reader.readAsDataURL(inputfile);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = async (e) => {
     
      console.log(email) //to verify location
      
        e.preventDefault();
        // if (!selectedFile) return;
        //UPLOAD FILE TO CLOUDINARY
        const files =file
       
       
const data=new FormData()
data.append('file',files)
// data.append('public_id',email)
data.append('upload_preset','profiles')


 const res=await fetch("https://api.cloudinary.com/v1_1/helping-hands-for-active-people/image/upload",
 {
     method:'POST',
     body:data
 })
 const fileuploadedurl=await res.json()
 setImage(fileuploadedurl.secure_url)
 const userImage={
  email:email,
  url:fileuploadedurl.secure_url
}
 axios({
  method: 'POST',
  url: `${BASE_URL}/auth/updateprofile`,
  headers: {
      'Content-Type': 'application/json',
          },
  data: userImage,
}).then(res => {
  
  // console.log(userImage ) 
  console.log(res.data) 
  setImage(fileuploadedurl.secure_url)
  // console.log(fileuploadedurl.secure_url +" inside") 

  })
 .catch(error=>{ 
 
  console.log(error) 
  
  }) 
 

 setFileInputState('');
 setPreviewSource('');
 

       
    };

    const logoutFile = async (e) => {
      // {xx.history.push({pathname:'/'})}
      
     
    }
            
    // const zoomlist=
    // zoomLink.map((zoom,index)=>{
    //  return( <div key={index} className="card card-body shadow mt-3"><table><tr ><td><h4 style={{color:"gray"}}>{zoomLink.title}</h4> 
    //     <a href={zoom.link}   width="30" height="40"/><a/></td></tr></table></div> )
    // }
    // ) 
 
    const zoomlist=
    zoomLink.map((zoomitem,index)=>{
     return( <div key={index} className="card card-body shadow mt-3"><table><tr ><td><h4 style={{color:"gray"}}>{zoomitem.title}</h4></td> <td>  
        <a href={`${zoomitem.link}`}>{zoomitem.link}</a></td></tr></table></div> )
    }
    )
   
  return (
    <Fragment>
      
      <Modal show={requestEditProfile} onHide={() => closeEditProfile()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Edit Profile Pix</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div>
            <h1 className="title">Upload an Image</h1>
            <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" />
            <form onSubmit={handleSubmitFile} className="form-group">
            <input name="file" type="file"
   className="file-upload" data-cloudinary-field="image_id"
   onChange={handleFileInputChange}
                    value={fileInputState}
                    id="fileInput"
                    //className="form-input"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'001','width':3000,'height':2000}}"/>
               
                <button className="btn btn-success" type="submit">
                    Submit
                </button>
                
            </form>
    
            <div style={{textAlign:'center'}}>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '150px',width:'150',  borderRadius: '50%', display: 'center'}}
                />
            )} 
               </div>
        </div>
    



          
        </Modal.Body>
      </Modal>

      <Header />
      <div style={{display:"flex",justifyContent:"left", flexWrap:"wrap",position:'relative',zIndex:50}}>
        <div textAlign='center' className="col-sm-2 text-center offset-0 card card-body shadow ">
            <h5 className="title">User Dashboard</h5>
            <img src={image} alt="User pix" style={{width:'130px',borderRadius:'50%',textAlign:'center'}}/>
            <br></br><button className='btn btn-danger ml20' type='button' onClick={logoutFile}><h8>Logout</h8></button>
            </div>
            <div className="gallery">
                    </div>
      
        </div>

      <div textAlign='center' className="col-sm-2 text-center offset-0 card card-body shadow " > 
     
      <form style={{display: "inline-block"}} className="form-group">
      
        
            <div className="form-group row" textAlign='center' display="flex">
            <div className="form-group row">
              <button onClick={() => setRequestEditProfile(true)} className="btn btn-primary">Edit profile Photo</button>
            </div>
              <div className="form-group row">
              <button name="submit" type="submit" className="btn btn-success">CHECK RESULT</button>
              </div>
            </div>
            
             </form>
      </div>
      <div style={{position:'relative',zIndex:1}}>{zoomlist}</div>
    </Fragment>
  );
 
                   
  
}
