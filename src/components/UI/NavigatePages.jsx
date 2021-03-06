import React from "react";
import { Button } from "../../Style/UI.styles";
import { Footer, PaginateContainer } from "../../Style/Containers.styles";
import { SubHeading } from "../../Style/Texts.styles";

const NavigatePages = props => {
  const onNavClick = pageChange => {
    const query = {
      p: Math.max(1, props.page + pageChange)
    };
    props.setQueryValues(query);
  };

  return (
    <Footer className="footer">
      <PaginateContainer className="prev-next-page">
        <Button leftArrow onClick={() => onNavClick(-1)}>
          <img
            src="https://img.icons8.com/metro/26/ffffff/down--v1.png"
            alt="navigate left"
          />
        </Button>
        <SubHeading pageNumber>page {props.page}</SubHeading>
        <Button
          rightArrow
          onClick={() => {
            onNavClick(1);
          }}
        >
          <img
            src="https://img.icons8.com/metro/26/ffffff/down--v1.png"
            alt="navigate right"
          />
        </Button>
      </PaginateContainer>
      {props.children}
    </Footer>
  );
};

export default NavigatePages;
