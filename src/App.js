import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
function App(props) {
  const [mode, drakMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      status: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 2000);
  };
  const removeBodyclasses=()=>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
  }
  const toggle = (cls) => {
    removeBodyclasses()
    document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      drakMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been alert", "success");
      document.title = "textUtils-dard mode";
    } else {
      drakMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been alert", "success");
      document.title = "textUtils-light mode";
    }
  };
  const toggler = () => {
    if (mode === "light") {
      drakMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been alert", "success");
      document.title = "textUtils-dard mode";
    } else {
      drakMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been alert", "success");
      document.title = "textUtils-light mode";
    }
  };
  return (
    <>
    <Router>

      <Navbar title="Home" home="Text" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <Routes>
          <Route path='/' element={<TextForm mode={mode} />} > </Route>          
          <Route path='/text' element={<TextForm mode={mode} />} > </Route>          
          <Route path='/about' element={<About  mode={mode} />} > </Route>          
        </Routes>
        {/* <TextForm/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
