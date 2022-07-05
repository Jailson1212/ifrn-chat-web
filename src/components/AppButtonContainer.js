import React from "react";
import Button from "@mui/material/Button";

export const AppButton = (props) => {
  let color_button = props.color ? props.color : "primary";
  let handle_click = props.onClick ? props.onClick : (() => null);
  let title_button = props.title ? props.title : "unamed";

  return (
    <Button
      color={color_button}
      onClick={handle_click}
      title={props.title}
      {...props}
    >
      {props.label}
    </Button>
  );
};