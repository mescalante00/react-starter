import { Grid } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

const MenuWrapper = styled(Grid)`
  margin-top: 1rem;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3rem;
  color: blue;
  padding-right: 1rem;
  &.active {
    color: black;
  }
`;

export const MainMenu = () => {
  return (
    <MenuWrapper container spacing={2}>
      <Grid item>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item>
        <Link to="/page1">Page 1</Link>
      </Grid>
      <Grid item>
        <Link to="/simple-form">Simple Form</Link>
      </Grid>
      <Grid item>
        <Link to="/example-form">Example Form</Link>
      </Grid>
      <Grid item>
        <Link to="/Cart.js">Cart</Link>
      </Grid>
    </MenuWrapper>
  );
};
