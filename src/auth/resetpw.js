import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
import Header from "../common/Header";
import axios from 'axios';


class  Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
       
      displaySpinner:""
  }
  

  this.handleEmail=this.handleEmail.bind(this)

  this.handleLogin=this.handleLogin.bind(this)
  }
 handleEmail(event){this.setState({email: event.target.value})}
 

 handleLogin(event){
  
   //alert("Your email is: "+this.state.email+" \n Your Password is:"+ this.state.password);
   event.preventDefault();
   
   const userLoginCred={
     email:this.state.email
   }
   this.setState({displaySpinner:true})
  axios({
    method: 'POST',
    url: 'http://localhost:5500/auth/resetpw',
    headers: {
        'Content-Type': 'application/json',
            },
    data: userLoginCred,
}).then(res => {
  console.log(res.data)
this.props.history.push("/dashboard")


    })
   .catch(error=>{this.setState({displaySpinner:false})})
 
 
 
 }
  render(){
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="col-sm-6 offset-3 card card-body shadow">
          <form onSubmit={this.handleLogin}>
            <h3 className="text-center">Reset Password</h3>
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="Enter Email Address" className="form-control" onChange={this.handleEmail} />
            </div>
            
            <div className="form-group text-center">
              <button hidden={ this.state.displaySpinner} className="btn btn-success btn-block" type="submit">
                Reset Password
              </button>
              <div hidden={!this.state.displaySpinner} class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <p className="text-center">
             Go Back to Login? <Link to="/auth/login">Click here</Link>
            </p>
            <p className="text-center">Copyright (c) Deaviel College</p>
          </form>
        </div>
      </div>
    </Fragment>
  );
  }//end of render
}
export default Login;