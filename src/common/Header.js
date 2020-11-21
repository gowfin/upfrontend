
import React, { Fragment,useState } from 'react' 
import {Link} from 'react-router-dom'
import { Modal } from "react-bootstrap";

export default   function Header() {
  const [requestLoanModalOpen, setRequestLoanModalOpen] = useState(false);

  const closeRequestLoanModal = () => {
    setRequestLoanModalOpen(false);
  };



    return(
     <Fragment>
      <Modal show={requestLoanModalOpen} onHide={() => closeRequestLoanModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Make Payment</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
           
            <form>
            
              <div className="form-group">
                <label>Loan Amount</label>
                <input placeholder="Enter request Amount" className="form-control" type="number" />
              </div>
              <div className="form-group">
              <label>StudentID/NAME</label>
              <input type="text" placeholder="Enter StudentID/Name" value={""} className="form-control" required="true" onChange={""}/>
            </div>
              <div className="form-group">
              <label>Narration</label>
              <input type="text" placeholder="Enter Purpose" value={""} className="form-control" required="true" onChange={""}/>
            </div>
              <div className="form-group">
                <button className="btn btn-success btn-block" onclick={""}>Submit</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-success" id="slide_bg">
        <a className="navbar-brand" href="CBT.html" style={{fontWeight: "900", fontSize: "28px",color:"#FFD700"} }><h3><span>De</span> <span>Aviel </span><span> College</span></h3></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="container" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
              <Link className="nav-link" to="/" style={{ fontWeight: "700", fontSize: "20px" }}><button className="btn btn-primary ">Home</button><span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to="/signup" style={{ fontWeight: "700", fontSize: "20px" }}><button className="btn btn-primary ">Registration</button><span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="CBT1.html" style={{ fontWeight: "700", fontSize: "20px" }}><button className="btn btn-primary ">TAKE TEST</button></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/form" style={{ fontWeight: "700", fontSize: "20px" }}><button className="btn btn-primary ">Admission</button></Link>
            </li>
            <li className="nav-item">
            <a className="nav-link"  href="remita.html" style={{ fontWeight: "700", fontSize: "20px" }}><button className="btn btn-primary "   >Payment</button></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </Fragment>
    )
}