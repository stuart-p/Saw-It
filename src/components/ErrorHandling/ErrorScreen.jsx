import React from "react";
import { ContentContainer } from "../../Style/Containers.styles";
import { Button } from "../../Style/UI.styles";
import { Link } from "@reach/router";

const ErrorScreen = props => {
  return (
    <ContentContainer>
      <h2>Something went wrong...</h2>
      <h3>
        {props.err.msg} ({props.err.status})
      </h3>
      <Link to="/">
        <Button>Back To Home</Button>
      </Link>
    </ContentContainer>
  );
};

export default ErrorScreen;
