import React from "react";

const ErrorScreen = props => {
  console.log(props);
  return (
    <div>
      <h1>error!</h1>
      <h2>{props.err.msg}</h2>
      <h3>{props.err.status}</h3>
    </div>
  );
};

export default ErrorScreen;
