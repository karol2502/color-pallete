import React from 'react';

const HexColor = (props) => {
  return (
    <>
      <h1>Hex color</h1>
      <span>
        #
        <input
          value={props.colorHEX}
          onChange={props.onChange}
          placeholder="FFFFFF"
          maxLength="6"
          size="4"
        />
      </span>
    </>
  );
};

export default HexColor;
