import React from "react";
import { LinearProgress } from "@material-ui/core";
import { withAuth } from "../components/ProtectedRoute";

//log out component
function Logout () {
  
  return (
    <div>
    <LinearProgress color="secondary"></LinearProgress>
    </div>
  );
}

export default withAuth(Logout);
