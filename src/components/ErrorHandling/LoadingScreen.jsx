import React from "react";
import { FullScreenContainer } from "../../Style/Containers.styles";
import { ReactComponent as Eye } from "../../images/eyeIcon.svg";
import { ReactComponent as Spinner } from "../../images/tail-spin.svg";
const LoadingScreen = () => {
  return (
    <FullScreenContainer className="loadingScreen">
      <div>
        <Eye height="150" width="150" />
      </div>
      <h1>LOADING...</h1>
      <Spinner />
    </FullScreenContainer>
  );
};

export default LoadingScreen;
