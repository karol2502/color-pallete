import React from 'react';
import './index.css';

const RGBColor = (props) => {
  return (
    <>
      <h1>RGB color</h1>
      <span>
        R
        <input
          value={props.colorRGB.r}
          onChange={(e) => {
            props.onChange(e, 'r');
          }}
          size="1"
          placeholder="255"
          maxLength="3"
        />
        G
        <input
          value={props.colorRGB.g}
          onChange={(e) => {
            props.onChange(e, 'g');
          }}
          size="1"
          placeholder="255"
          maxLength="3"
        />
        B
        <input
          value={props.colorRGB.b}
          onChange={(e) => {
            props.onChange(e, 'b');
          }}
          size="1"
          placeholder="255"
          maxLength="3"
        />
      </span>
    </>
  );
};

export default RGBColor;
