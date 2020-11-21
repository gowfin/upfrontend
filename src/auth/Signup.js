import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from "../common/env";
export default function Signup() {
  const [displaySpinner,setdisplaySpinner]=useState(false)
  const [loginError,setLoginError]=useState(false)
  const [loginMsg,setloginMsg]=useState("")
  const [registrationStage, SetRegistrationStage] = useState(1);
  const [phone,setPhone]=useState('')
  const [fullname,setFullname]=useState('')
  const [email,setEmail]=useState('')
  const [state,setState]=useState('')
  const [dob,setDob]=useState('')
  const [pass,setPass]=useState("")
  const [confirm,setConfirm]=useState("")
 // const [image,setImage]=useState("")
  
 

  const renderRegistrationStage = () => {
   
    //HANDLE TEXT EVENTS
    const getPhone=e=>{
      setPhone(e.target.value)
      setLoginError(true)
    }
    const getFullname=e=>{
      setFullname(e.target.value)
      setLoginError(true)
    }
    const getEmail=e=>{
      setEmail(e.target.value)
      setLoginError(true)
    }
    const getState=e=>{
      setState(e.target.value)
      setLoginError(true)
    }
    const getDob=e=>{
      setDob(e.target.value)
      setLoginError(true)
    }
    const getPass=e=>{
      setPass(e.target.value)
      setLoginError(true)
    }
    const getConfirm=e=>{
      setConfirm(e.target.value)
      setLoginError(true)
    }
    // const getImage=(e)=>{
    //   setImage(e.target.value)
    // }
    //HANDLE NEXT EVENT
    const nextEvent=(e)=>{
      e.preventDefault()
      if(pass!==confirm ||confirm==="" ){
        setLoginError(false)
        setloginMsg("Password and Confirm Password must be the same")
     
      }
    else{
     SetRegistrationStage(2)
    }
    }
    //HANDLE PREV EVENT
    const prevEvent=(e)=>{
      e.preventDefault()
     SetRegistrationStage(1)
     
    }
    //HANDLE CLICK EVENT
    const registerUser= async e => {
      e.preventDefault();
     
      const userDetail={
        studentID:phone,
        fullname: fullname,
        email: email,
        state: state,
        dob:dob,
        imgurl:'cb2nlndjmxxechi9e1ew.png',
        password:pass,
    
      }
      
     
      setdisplaySpinner(true)
      setLoginError(false)
        axios({
          method: 'POST',
          url: `${BASE_URL}/auth/register`,
          headers: {
              'Content-Type': 'application/json',
                  },
          data: userDetail,
      }).then(res => {
        
      //   console.log(res.data)
      // this.props.history.push("/dashboard")
      setLoginError(false)
        //setloginMsg(res.data)
        setdisplaySpinner(false)
        setloginMsg("Registration successful")
     
      
          })
         .catch(error=>{ 
          setLoginError(true)
          setloginMsg( error)
          setdisplaySpinner(true)
          
          }) 
          setdisplaySpinner(true)
         ///
       
          setPhone("")
          setFullname("")
          setEmail("")
          setState("")
          setDob("")
          setPass("")
          setConfirm("")
        
        
         ///
          }
        
    switch (registrationStage) {
      case 1:
        return (
          <form>
            <h3 className="text-center">Signup</h3>
            <label hidden={loginError} style={{color: "red"}}>{loginMsg}</label>
            <div className="form-group">
              <label>Student ID</label>
              <input type="text" placeholder="Enter Student ID" value={phone} className="form-control"onChange={getPhone} />
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" value={fullname} className="form-control" onChange={getFullname}/>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" value={pass} className="form-control"  onChange={getPass}/>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="re-Enter Password" value={confirm} className="form-control" onChange={getConfirm}/>
            </div>
            {/* <div><input name="file" type="file"
   className="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'Add Image','width':3000,'height':2000}}"/>
</div> */}
            <div className="form-group">
              <button onClick={nextEvent} className="btn btn-success btn-block" type="button">
                Next
              </button>
            </div>

            <p className="text-center">
              Already registered? <Link to="/auth/login">Sign in</Link>
            </p>
            <p className="text-center">Copyright (c) Deaviel College</p>
          </form>
        );
      case 2:
        return (
          <form>
            <h3 className="text-center">Signup</h3>
            <label hidden={loginError} style={{color:"Red"}}>{loginMsg}</label>
            <div className="form-group">
              <label>D.O.B</label>
              <input type="date" className="form-control" value={dob} onChange={getDob}/>
            </div>

            <div className="form-group">
              <label>State of Residence</label>
              <select className="form-control" value={state} onChange={getState}>
                <option>--Select State--</option>
                <option>Lagos</option>
                <option>Cross River</option>
                <option>Enugu</option>
              </select>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter valid mail address" value={email} className="form-control"  onChange={getEmail}/>
            </div>

            <div className="form-group text-center">
              <button onClick={prevEvent} className="btn btn-success btn-sm" type="button">
                {"<<"}Previous
              </button>
              <button hidden={displaySpinner}className="btn btn-success btn-sm ml-2" type="submit" onClick={registerUser}>
                Create Account
              </button>
              <div hidden={!displaySpinner} className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <p className="text-center">
              Already registered? <Link to="/auth/login">Login</Link>
              </p>
            <p className="text-center">Copyright (c) Del Aviel College</p>
            <p className="text-center">Developed by helping Hands to tech</p>
          </form>
        );
        default:
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="col-sm-6 offset-3 card card-body shadow">{renderRegistrationStage()}</div>
      </div>
    </Fragment>
  );
}
