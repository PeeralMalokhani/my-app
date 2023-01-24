import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
function App(props) {
  const [Mode, drakMode] = useState("light");
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
  const DarkMode = () => {
    if (Mode === "light") {
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
    {/* <Router> */}

      <Navbar title="Home" home="Text" mode={Mode} toggle={DarkMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        {/* <Routes>
          <Route path='/text' element={<TextForm/>} > </Route>          
          <Route path='/about' element={<About />} > </Route>          
        </Routes> */}
        <TextForm/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
