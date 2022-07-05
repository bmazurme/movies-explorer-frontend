import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({component: Component, ...props}) {
  console.log(props.loggedIn());
  return(
    <Route>   
      { 
        () => props.loggedIn()
          ? <Component {...props}/> 
          : <Redirect to='/signin' /> 
      }
    </Route>
  )
}

export default ProtectedRoute;
