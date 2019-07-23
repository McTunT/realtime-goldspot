import React from "react";
import NumberFormat from "react-number-format";

export const Number = ({ value, handleChange }) => {
  return (
    <NumberFormat
      className="inputFont"
      thousandSeparator={true}
      value={value}
      onChange={handleChange}
    />
  );
};
