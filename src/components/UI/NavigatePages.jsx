import React from "react";
import { Button } from "../../Style/UI.styles";
import { Footer } from "../../Style/Containers.styles";

const NavigatePages = props => {
  return (
    <Footer>
      <Button leftArrow>
        <img src="https://img.icons8.com/metro/26/000000/down--v1.png" />
      </Button>
      <h5>page {props.page}</h5>
      <Button rightArrow>
        <img src="https://img.icons8.com/metro/26/000000/down--v1.png" />
      </Button>
    </Footer>
  );
};

export default NavigatePages;
