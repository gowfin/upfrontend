import React,{Fragment,useState} from "react";
import {Modal} from "react-bootstrap";
import Header from "../common/Header";
// import { BASE_URL } from "../common/env";

 function Profile(){
  const [requestEditProfile, setRequestEditProfile] = useState(false);
  const closeEditProfile = () => {
    setRequestEditProfile(false);
  };
return(
   <Fragment>
     <Modal show={requestEditProfile} onHide={() => closeEditProfile()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Edit Profile</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form style={{display: "inline-block"}} className="form-group">

            <label>Name</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-address-card"></i>
                    </div>
                  </div> 
                  <input id="text" name="text" type="text" className="form-control" required="required" placeholder="Surname first then other names" />
                </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="phone" name="phone"placeholder="Enter Phone Number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="emailID" name="emailID" placeholder="Enter email Address" className="form-control" />
            </div>
            <div className="form-group">
              <label>BVN</label>
              <input type="text" name="text" placeholder="Enter BVN Number" className="form-control" />
            </div>
            <div className="form-group">
              <label >Employment Status</label> 
              <div>     </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                  <input name="checkbox" id="checkbox_0" type="checkbox" checked="checked" className="custom-control-input" value="rabbit" aria-describedby="checkboxHelpBlock"/> 
                  <label for="checkbox_0" className="custom-control-label">Employed</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input name="checkbox" id="checkbox_1" type="checkbox" className="custom-control-input" value="duck" aria-describedby="checkboxHelpBlock" checked=""/> 
                  <label for="checkbox_1" className="custom-control-label">Unemployed</label>
                </div>  
            </div> 
            <div className="form-group">
              <label>Upload Bank Statement</label>
              <input type="file" name="file" placeholder="Bank Statement" className="btn btn-success" />
            </div>
            <div className="form-group">
                <label>Link Card (PayStack)</label>
                <input placeholder="Enter PayStack UID" className="form-control" type="number" />
              </div>
            <div className="form-group row">
              <div className="offset-2 col-10 text-center">
                <button name="submit" type="submit" className="btn btn-success">SAVE CHANGES</button>
              </div>
            </div>
           
          </form>
        </Modal.Body>
      </Modal>
     <Header />
     <h4 className="text-center"> </h4>
       {/* <div text-align='center' className="text-center" > */}
      <div text-align='center' className="col-sm-4 text-center offset-3 card card-body shadow " > 
      <h4 className="text-center" style={{display:"flex",justifyContent:"space-between",}}>User Profile <div text-align="right"><button onClick={() => setRequestEditProfile(true)} className="btn btn-primary" >Edit profile</button></div></h4>
         <form style={{display: "inline-block"}} className="form-group">
            <label>Name</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-address-card"></i>
                    </div>
                  </div> 
                  <input id="text" name="text" type="text" className="form-control" required="required" placeholder="Surname first then other names" />
                </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="phone" name="phone"placeholder="Enter Phone Number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="emailID" name="emailID" placeholder="Enter email Address" className="form-control" />
            </div>
            <div className="form-group">
              <label>BVN</label>
              <input type="text" name="text" placeholder="Enter BVN Number" className="form-control" />
            </div>
            <div className="form-group">
              <label >Employment Status</label> 
              <div>     </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                  <input name="checkbox" id="checkbox_0" type="checkbox" checked="checked" className="custom-control-input" value="rabbit" aria-describedby="checkboxHelpBlock"/> 
                  <label for="checkbox_0" className="custom-control-label">Employed</label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input name="checkbox" id="checkbox_1" type="checkbox" className="custom-control-input" value="duck" aria-describedby="checkboxHelpBlock" checked=""/> 
                  <label for="checkbox_1" className="custom-control-label">Unemployed</label>
                </div>  
            </div> 
            <div className="form-group">
              <label>Upload Bank Statement</label>
              <input type="file" name="file" placeholder="Bank Statement" className="btn btn-success" />
            </div>
            <div className="form-group">
                <label>Link Card (PayStack)</label>
                <input placeholder="Enter PayStack UID" className="form-control" type="number" />
              </div>
            <div className="form-group row">
              <div className="offset-2 col-10">
                <button justifyContent="center" name="submit" type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
            <p className="text-center">
              Reset Password? <a href="nolink">Click here</a>
            </p>
          </form>
  </div>   
  </Fragment>  
);
   }
   export default Profile;