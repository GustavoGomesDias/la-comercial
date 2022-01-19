import React from 'react';

export interface CircleProps {
  height?: string
  width?: string
  bg?: string
}

export const Circle = ({ height, width, bg }: CircleProps) => {
  return (
    <span style={{
      borderRadius: "50%",
      display: "block",
      height: height !== undefined ? height : "4px",
      width: width !== undefined ? width : "4px",
      background: bg !== undefined ? bg : "#fff",
      marginTop: "auto",
      marginBottom: "auto",
      marginRight: "10px",
      marginLeft: "10px",
    }} />
  );
}