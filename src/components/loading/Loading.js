import React from "react";
import { Spinner } from "reactstrap";
import "./Loading.css";

export default function Loading() {
  return (
    <div className={"spinnerContainer"}>
      <Spinner />
    </div>
  );
}
