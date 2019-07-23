import React from "react";
import styled from "styled-components";
import { Box, Flex } from "rebass";
import { FormattedNumber } from "react-intl";
import { BoxSpot } from "./Box";

const OnInput = styled.input`
  width: 150px;
  margin: 0;
  background: none;
  top: 0;
  font-size: 50px;
  margin: 0;
  border: none;
`;

const Link = ({
  bid,
  offer,
  bidJiwelry,
  offerJiwelry,
  interest,
  interestOffer
}) => {
  return (
    <Box mr={[85]} mt={[75]}>
      <Flex alignItems="flex-end" justifyContent="flex-end">
        <BoxSpot
          width={[1, 1 / 2, 1 / 4]}
          mr={[78]}
          mt={[1, 2]}
          color="#cea931"
          fontSize={[90]}
        >
          <OnInput value={bid} />
        </BoxSpot>
      </Flex>
    </Box>
  );
};
