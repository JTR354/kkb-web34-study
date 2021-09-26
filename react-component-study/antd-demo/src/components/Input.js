import React from "react";

export default function Input(props) {
  const { value = "", ...rest } = props;
  return <input value={value} {...rest}></input>;
}
