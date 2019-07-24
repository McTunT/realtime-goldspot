import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import styled from "styled-components";
import { Button } from "rebass";

const ButtonLink = styled(Button)`
  background: none;
  cursor: pointer;
  width: 15em;
  height: 3em;
`;

export const RouteLink = ({ to, html }) => (
  <Link to={to}>
    <Tooltip size="big" theme="light" html={<strong>{html}</strong>}>
      <ButtonLink />
    </Tooltip>
  </Link>
);
