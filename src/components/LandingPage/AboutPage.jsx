import React from "react";
import {
  PrimaryContainer,
  AboutPageTextContainer
} from "../../Style/Containers.styles";
import { PageTitle, StyledPara, SubHeading } from "../../Style/Texts.styles";

const AboutPage = () => {
  return (
    <PrimaryContainer>
      <AboutPageTextContainer>
        <PageTitle landingPage>About</PageTitle>
        <SubHeading>What is this?</SubHeading>
        <StyledPara>
          This is a portfolio piece created by Stuart Palmer in February 2020,
          as part of the Northcoders developer bootcamp. Please feel free to
          contact or connect with me through my portfolio page{" "}
          <a href="https://stuart-p.github.io/">HERE</a>.
        </StyledPara>
        <SubHeading>What does it do?</SubHeading>
        <StyledPara>
          Saw It serves users a selection of user-written articles, on various
          pre-generated topics. Users can read a particular article, and add
          comments to it. If the user likes an article or comment, they can
          'applaud' the post up to 5 times in order to show their appreciation.
        </StyledPara>
        <SubHeading>How was it made?</SubHeading>
        <StyledPara>
          The front-end is written with React.js, with @reach-router for
          single-page-application routing, Axios for back-end API requests, and
          Styled-Components for CSS/HTML management. It is hosted on a Netlify
          server. The source code can be found{" "}
          <a href="https://github.com/stuart-p/Saw-It">HERE</a>.
          <br />
          The back-end is a Node.js Express server, with a PostreSQL database.
          It is hosted on a Heroku server. The source code can be found{" "}
          <a href="https://github.com/stuart-p/sawit-server">HERE</a>.
        </StyledPara>
      </AboutPageTextContainer>
    </PrimaryContainer>
  );
};

export default AboutPage;
