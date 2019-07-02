import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";


const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink path="/">
        <Title>{state.frontity.title}</Title>
      </StyledLink>
      <Description>{state.frontity.description}</Description>
      
    </Container>
    <Nav />
  </>
);

export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  @media (max-width: 767px) {
    width: 70%;
  }
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color:  rgb(0, 102, 102, 0.45);
  margin-top: 90px;

  
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  color: #fff;
  font-family: 'Rancho', cursive;
  text-align: center;

`;

const Description = styled.h5`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rancho', cursive;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
