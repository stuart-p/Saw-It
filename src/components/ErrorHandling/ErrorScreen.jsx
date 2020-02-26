import React from "react";
import { ContentContainer } from "../../Style/Containers.styles";

const ErrorScreen = props => {
  console.log(props);
  return (
    <ContentContainer>
      <h2>
        {props.err.msg} ({props.err.status})
      </h2>
    </ContentContainer>
  );
};

export default ErrorScreen;
