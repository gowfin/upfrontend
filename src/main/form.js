import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from "../common/env";

export default function Signup() {
  const [displaySpinner,setdisplaySpinner]=useState(false)
  const [loginError,setLoginError]=useState(false)
  const [posted,setPosted]=useState(false)
  const [loginMsg,setloginMsg]=useState("")
  const [registrationStage, SetRegistrationStage] = useState(1);
  const [phone,setPhone]=useState('')
  const [fullname,setFullname]=useState('')
  const [othername,setOthername]=useState('')
  const [surname,setSurname]=useState('')
  const [english,setEnglish]=useState('')
  const [lga,setLGA]=useState('')
  const [email,setEmail]=useState('')
  const [state,setState]=useState('')
  const [dob,setDob]=useState('')
  const [address,setAddress]=useState("")
  const [religion,setReligion]=useState("Christianity")
  const [appliedClass,setClass]=useState("")
  const [prevSch,setPrevSch]=useState("none")
  const [sex,setSex]=useState("")
  const [prevResult,setPrevResult]=useState("none")
//   const [confirm,setConfirm]=useState("")
//   const [image,setImage]=useState("")
  
 

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
    const getOthername=e=>{
        setOthername(e.target.value)
        setLoginError(true)
      }
      const getSurname=e=>{
        setSurname(e.target.value)
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
    const getPrevResult=e=>{
      setPrevResult(e.target.value)
      setLoginError(true)
    }
    const getEnglish=e=>{
      setEnglish(e.target.value)
      setLoginError(true)
    }
    const getLGA=e=>{
        setLGA(e.target.value)
        setLoginError(true)
      }
      const getAddress=e=>{
        setAddress(e.target.value)
        setLoginError(true)
      }
      const getReligion=e=>{
        setReligion(e.target.value)
        setLoginError(true)
      }
    
      const getClass=e=>{
        setClass(e.target.value)
        setLoginError(true)
      }
      const getSex=e=>{
        setSex(e.target.value)
        setLoginError(true)
      }
      const getPrevSch=e=>{
        setPrevSch(e.target.value)
        setLoginError(true)
      }
   
    //HANDLE NEXT EVENT
    const nextEvent=(e)=>{
      e.preventDefault()
      if(surname==="" ){
        setLoginError(false)
        setloginMsg("Surname is mandatory")
      }
      else if(othername==="" ){
        setLoginError(false)
        setloginMsg("othername is mandatory")
      }
      else if(english==="" ){
        setLoginError(false)
        setloginMsg("Knowledge of English is mandatory")
      }
      else if(dob==="" ){
        setLoginError(false)
        setloginMsg("Date of Birth is mandatory")
      }
      else if(appliedClass==="" ){
        setLoginError(false)
        setloginMsg("Class applied for cannot be blank")
      }
      else if(sex==="" ){
        setLoginError(false)
        setloginMsg("Sex is mandatory")
      }
      else if(prevResult==="" ){
        setLoginError(false)
        setloginMsg("Previous result is mandatory")
      }
     
    else{
      e.preventDefault()
     SetRegistrationStage(2)
    }
    }
    //HANDLE PREV EVENT
    const prevEvent=(e)=>{
      e.preventDefault()
     SetRegistrationStage(1)
     
    }
    //HANDLE CLICK EVENT
    const handleSubmitForm= async e => {
      e.preventDefault();
      if(fullname==="" ){
        setLoginError(false)
        setloginMsg("Name of Parent/Guardian is mandatory")
      }
      else if(address==="" ){
        setLoginError(false)
        setloginMsg("Address has not been filled")
      }
      else if(phone==="" ){
        setLoginError(false)
        setloginMsg("Please, phone number has not been filled")
      }
      else if(state==="" ){
        setLoginError(false)
        setloginMsg("Your state of origin is required")
      }
      else if(lga==="" ){
        setLoginError(false)
        setloginMsg("Local Government Area cannot be empty")
      }
      else{
      const formDetail={
        phone:phone,
        fullname:fullname,
        othername:othername,
        surname: surname,
        english:english,
        lga:lga,
        email:email,
        state:state,
        dob:dob,
        address:address,
        religion:religion,
        appliedClass:appliedClass,
        prevSch:prevSch,
        sex:sex,
        prevResult:prevResult,
    
      }
      
     
      setdisplaySpinner(true)
      setLoginError(false)
        axios({
          method: 'POST',
          url: `${BASE_URL}/auth/form`,
          headers: {
              'Content-Type': 'application/json',
                  },
          data:formDetail,
      }).then(res => {
        setPosted(true)
        // console.log(res.data)
      // this.props.history.push("/dashboard")
      setLoginError(false)
        //setloginMsg(res.data)
        setdisplaySpinner(false)
        
        setloginMsg("Application successful")
     
      
          })
         .catch(error=>{ 
          setLoginError(true)
          setloginMsg( error)
          setdisplaySpinner(true)
          setPosted(false)
          }) 
          setdisplaySpinner(true)
          if(posted){
          setPhone("")
          setFullname("")
          setSurname("")
          setEnglish("")
          setLGA("")
          setOthername("")
          setEmail("")
          setState("")
          setDob("")
          setAddress("")
          setReligion("christianity")
          setClass("")
          setPrevSch("none")
          setSex("")
          setPrevResult("none")
        }
      }
      window.scrollTo(0, 0)
          }
        
    switch (registrationStage) {
      case 1:
        return (
          <form>
            <h3 className="text-center">Apply for Admission</h3>
            <label hidden={loginError} style={{color: "red"}}>{loginMsg}</label>
            <div className="form-group">
              <label>Surname</label>
              <input type="text" placeholder="Enter Surame" value={surname} className="form-control" onChange={getSurname}/>
            </div>
            <div className="form-group">
              <label>Other names</label>
              <input type="text" placeholder="Other Names" value={othername} className="form-control" required="true" onChange={getOthername}/>
            </div>
            <div className="form-group">
              <label>Sex</label>
              <select className="form-control" value={sex} onChange={getSex} required="true">
                <option>--Select Sex--</option>
                <option>Male</option>
                <option>Female</option>
              </select></div>
            <div className="form-group">
              <label>D.O.B</label>
              <input type="date" className="form-control" value={dob} onChange={getDob} required="true"/>
            </div>
            <div className="form-group">
              <label>Class for which admission is sought</label>
              <select className="form-control" value={appliedClass} onChange={getClass} required="true">
                <option>--Select Class--</option>
                <option>Creche</option>
                <option>Pre-Nursery</option>
                <option>KG 1</option>
                <option>KG 2</option>
                <option>Transition</option>
                <option>PRY 1</option>
                <option>PRY 2</option>
                <option>PRY 3</option>
                <option>PRY 4</option>
                <option>PRY 5</option>
                <option>JSS 1</option>
                <option>JSS 2</option>
                <option>JSS 3</option>
                <option>SSS 1</option>
                <option>SSS 2</option>
                <option>SSS 3</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Knowledge of English language</label>
              <select className="form-control" value={english} onChange={getEnglish} required="true">
                <option>--Select Level--</option>
                <option>Fluent</option>
                <option>Basic</option>
                <option>None</option>
              </select>
            </div>
            <h3 className="text-center">Previous school attended</h3>
            <div className="form-group">
              <label>Name of school</label>
              <input type="text" placeholder="Type Name of School" value={prevSch} className="form-control" onChange={getPrevSch}/>
            </div>
            <div className="form-group">
              <label>Class Passed and result obtained</label>
              <input type="text" placeholder="Enter last result obtained" value={prevResult} className="form-control" onChange={getPrevResult}/>
            </div>
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
            <h3 className="text-center">Parent/Guardian profile</h3>
            <label hidden={loginError} style={{color:"Red"}}>{loginMsg}</label>
            <div className="form-group">
              <label>Guardian Full Name</label>
              <input type="text" placeholder="Full Name" value={fullname} className="form-control" onChange={getFullname}/>
            </div>
            <div className="form-group">
              <label>Residential Address</label>
              <input type="text" placeholder="Residential Address" value={address} className="form-control" onChange={getAddress}/>
            </div>
            <div className="form-group">
              <label>State of Origin</label>
              <select className="form-control" value={state} onChange={getState}>
                <option>--Select State--</option>
                <option>Adamawa</option>
                <option>Akwa Ibom</option>
                <option>Anambra</option>
<option>Bauchi</option>
<option>Bayelsa</option>
<option>Benue</option>
<option>Borno</option>
<option>Cross River</option>
<option>Delta</option>
<option>Ebonyi</option>
<option>Edo</option>
<option>Ekiti</option>
<option>Enugu</option>
<option>Gombe</option>
<option>(FCT)</option>
<option>Imo</option>
<option>Jigawa</option>
<option>Kaduna</option>
<option>Kano</option>
<option>Katsina</option>
<option>Kebbi</option>
<option>Kogi</option>
<option>Kwara</option>
<option>Lagos</option>
<option>Nasarawa</option>
<option>Niger</option>
<option>Ogun</option>
<option>Ondo</option>
<option>Osun</option>
<option>Oyo</option>
<option>Plateau</option>
<option>Rivers</option>
<option>Sokoto</option>
<option>Taraba</option>
<option>Yobe</option>
<option>Zamfara</option>
</select>
            </div>
            <div className="form-group">
              <label>Local Government Area</label>
              <input type="text" placeholder="Local Government Area" value={lga} className="form-control" onChange={getLGA}/>
            </div>
            <div className="form-group">
              <label>Religion</label>
              <select className="form-control" value={religion} onChange={getReligion}>
                <option>--Select--</option>
                <option>Christianity</option>
                <option>Islam</option>
                <option>Atheism</option>
                <option>Grail Movement</option>
                <option>Hinduism</option>
                <option>Judaism</option>
                <option>Buddhists</option>
                <option>traditional religions</option>
                <option>Rastafari</option>
                <option>Others</option>
                </select>
                </div>
            <div>
            <label>Phone</label>
              <input type="text" placeholder="Enter phone number" value={phone} className="form-control"onChange={getPhone} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter valid mail address" value={email} className="form-control"  onChange={getEmail}/>
            </div>

            <div className="form-group text-center">
              <button onClick={prevEvent} className="btn btn-success btn-sm" type="button">
                {"<<"}Previous
              </button>
              <button hidden={displaySpinner}className="btn btn-success btn-sm ml-2" type="submit" onClick={handleSubmitForm}>
                Submit Form
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
