import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";

//facebook login component
export default function FacebookLogin() {
  return (
    <div>
      <button
        name="submit"
        className="facebookButton"
        onClick={() =>
          (window.location = "http://localhost:8000/facebooklogin")
        }
      >
        <FacebookIcon></FacebookIcon> Sign in with facebook
      </button>
    </div>
  );
}
