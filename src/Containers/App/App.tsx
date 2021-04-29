import React from "react";
import { Route } from "react-router-dom";
import "../../App.css";
import RegistratonPageComponent from "../../Components/MainPageWrapper";
import AuthFormComponent from "../../Components/AuthPage";


function App() {

  return (
    <>
      <Route exact path="/" component={AuthFormComponent} />
      <Route path="/auth" component={RegistratonPageComponent} />
    </>
  )
}

export default App;
