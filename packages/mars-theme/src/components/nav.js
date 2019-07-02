import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ({ state }) => (
  <Container>
    {state.theme.menu.map(([name, link]) => (
      <Item key={name} isSelected={state.router.link === link}>
        <Link link={link}>{name}</Link>
      </Item>
    ))}
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  @media (max-width: 767px) {
    display: none;
  }
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  background-color:  rgb(0, 102, 102, 0.45);
  font-family: 'Rancho', cursive;
  font-size: rem;
  justify-content: center;
  padding-bottom: 15px;
  overflow-x: auto;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 2rem;
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: center;

  & > a {
    display: inline-block;
    line-height: 1.2em;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
