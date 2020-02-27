import React from "react";
import { Button } from "../../Style/UI.styles";
import { Footer } from "../../Style/Containers.styles";

const NavigatePages = props => {
  const onNavClick = pageChange => {
    const query = {
      p: Math.max(1, props.page + pageChange)
    };
    props.setQueryValues(query);
  };

  return (
    <Footer>
      <Button leftArrow onClick={() => onNavClick(-1)}>
        <img src="https://img.icons8.com/metro/26/000000/down--v1.png" />
      </Button>
      <h5>page {props.page}</h5>
      <Button
        rightArrow
        onClick={() => {
          onNavClick(1);
        }}
      >
        <img src="https://img.icons8.com/metro/26/000000/down--v1.png" />
      </Button>
    </Footer>
  );
};

export default NavigatePages;
