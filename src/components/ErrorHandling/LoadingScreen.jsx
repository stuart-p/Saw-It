import React from "react";
import { FullScreenContainer } from "../../Style/Containers.styles";
import { ReactComponent as Eye } from "../../images/eyeIcon.svg";

const LoadingScreen = () => {
  return (
    <FullScreenContainer className="loadingScreen">
      <div>
        <Eye height="150" width="150" />
      </div>
      <h1>LOADING...</h1>
    </FullScreenContainer>
  );
};

export default LoadingScreen;
