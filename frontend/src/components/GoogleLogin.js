import * as React from "react";
import GoogleButton from "react-google-button";

//google login component
export default class GoogleLogin extends React.Component {
  render() {
    return (
      <div className="googleLogin">
        <GoogleButton
          type="dark"
          name="submit"
          className="googleButton"
          onClick={() =>
            (window.location = "http://localhost:8000/googlelogin")
          }
        ></GoogleButton>
      </div>
    );
  }
}
