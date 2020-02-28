import React from "react";
import TopicList from "../Topic/TopicList";
import { Link } from "@reach/router";
import {
  HeaderContainer,
  HeaderButtonBox,
  TopicHeaderContainer,
  ExpandedButtonContainer,
  TitleHeaderContainer
} from "../../Style/Containers.styles";
import { PageTitle, SubHeading } from "../../Style/Texts.styles";
import { Button } from "../../Style/UI.styles";

class Header extends React.Component {
  state = {
    topicsShowing: false
  };

  toggleTopicsShowing = () => {
    this.setState(currentState => {
      return { topicsShowing: !currentState.topicsShowing };
    });
  };

  closeTopicsMenu = () => {
    this.setState({ topicsShowing: false });
  };

  render() {
    return (
      <HeaderContainer>
        <TitleHeaderContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 24 24"
            style={{ gridArea: "logo" }}
          >
            <path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z" />
          </svg>
          <PageTitle headline>SAW-IT</PageTitle>
          <SubHeading header>hello, {this.props.loggedInAs}!</SubHeading>
          <HeaderButtonBox>
            <Button
              onClick={this.toggleTopicsShowing}
              menuExpand
              topicsExpanded={this.state.topicsShowing}
            >
              <img
                src="https://img.icons8.com/metro/26/ffffff/expand-arrow.png"
                alt="expand arrow"
              />
            </Button>
          </HeaderButtonBox>
        </TitleHeaderContainer>
        <TopicHeaderContainer showTopics={this.state.topicsShowing}>
          <ExpandedButtonContainer>
            <Link to="/">
              <Button onClick={this.closeTopicsMenu}>home</Button>
            </Link>
            <a href="https://stuart-p.github.io">
              <Button>My Portfolio</Button>
            </a>
          </ExpandedButtonContainer>
          <SubHeading>Browse topics:</SubHeading>
          <TopicList closeTopicsMenu={this.closeTopicsMenu} />
        </TopicHeaderContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
