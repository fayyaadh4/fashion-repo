import React from "react";
import { Button } from "react-bootstrap";

//button for changing views
export default function ViewButton(props) {
  return (
    <div>
      <Button className="viewButton" onClick={props.changeViewMode}>
        Change to {props.changeTo}
      </Button>
    </div>
  );
}
