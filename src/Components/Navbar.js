import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/text">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                about
              </Link>
            </li>
          </ul>
          <div className="d-flex">
           <div className="bg-primary rouded mx-2  " onClick={()=>{props.toggle("primary")}} style={{height:"30px",width:"30px",cursor:"pointer",color:props.mode==='light'?"black":"black"}}></div>
           <div className="bg-danger rouded mx-2  " onClick={()=>{props.toggle("danger")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
           <div className="bg-success rouded mx-2  " onClick={()=>{props.toggle("success")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
           <div className="bg-dark rouded mx-2  " onClick={()=>{props.toggle("dark")}} style={{height:"30px",width:"30px",cursor:"pointer",border:"2px solid white",color:props.mode==='light'?"black":"black"}}></div>
           <div className="bg-light rouded mx-2  " onClick={()=>{props.toggle("light")}} style={{height:"30px",width:"30px",cursor:"pointer",border:"2px solid black"}}></div>
           <div className="bg-warning rouded mx-2  " onClick={()=>{props.toggle("warning")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode==='dark'?"light":"dark"}`} >
            <input
              className="form-check-input"
              onClick={()=>{props.toggle(null)}}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Malokhai",
  home: "Abdul Latif",
};
