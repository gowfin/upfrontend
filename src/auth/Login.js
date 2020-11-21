import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
import { BASE_URL } from "../common/env";



import Header from "../common/Header";
import axios from 'axios';
//import Switch from "react-bootstrap/esm/Switch";

class  Portal extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
      password: "",  
      displaySpinner:"",
      loginError:"",
      loginMsg:""
  }

 
  this.handleEmail=this.handleEmail.bind(this)
  this.handlePwd=this.handlePwd.bind(this)
  this.handleLogin=this.handleLogin.bind(this)
  }
 handleEmail(event){this.setState({email: event.target.value})}
 handlePwd(event){this.setState({password:event.target.value})}

 handleLogin(event){
  
   //alert("Your email is: "+this.state.email+" \n Your Password is:"+ this.state.password);
   event.preventDefault();
  
   const userLoginCred={
     email:this.state.email,
     password:this.state.password
   }
   this.setState({displaySpinner:true})
  axios({
    method: 'POST',
    url: `${BASE_URL}/auth/login`,
    headers: {
        'Content-Type': 'application/json',
            },
    data: userLoginCred,
}).then(res => {
  

  console.log(res.data)
 
    // headers["Authorization-Token"] = res.data.token;
  

 this.props.history.push(
  {pathname:`/dashboard/${this.state.email}`,
 state:{email:this.state.email}
 }
  )
 

    })
   .catch(error=>{ 
    console.log(error)
    // this.state.=true
    // this.setState({displaySpinner:false})
    // this.state.loginMsg=error.message+", invalid Password/email"
    this.setState({loginMsg:error.message+", invalid Password/email"})
    this.setState({displaySpinner:false})
    
    })
 
    // this.props.history.push(
    //   {pathname:"/dashboard",
    //   email:this.state.email}
    //   )
 
 }
  render(){

 
  return(
  <Fragment>
    <Header />
    <div className="container mt-5">
    <label hidden={this.state.displaySpinner} style={{color: "red"}}>{this.state.loginMsg}</label>
      <div className="col-sm-6 offset-3 card card-body shadow">
        <form onSubmit={this.handleLogin}>
          <h3 className="text-center">Login</h3>
          <div className="form-group">
            <label>Email Address</label>
            <input type="text" placeholder="Enter Email Address" className="form-control" onChange={this.handleEmail} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" onChange={this.handlePwd}/>
          </div>
          <div className="form-group text-center">
            <button hidden={ this.state.displaySpinner} className="btn btn-success btn-block" type="submit">
              Login
            </button>
            <div hidden={!this.state.displaySpinner} className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <p className="text-center">
            Forgot Password? <Link to="/auth/resetpw">Click here</Link>  
          </p>
          <p className="text-center">
            Not registered? <Link to="/signup">SignUp</Link>
            </p>
          <p className="text-center">Copyright (c) Deaviel College</p>
        </form>
      </div>
    </div>
        
    </Fragment>
  )
  }//end of render
}

export default Portal;