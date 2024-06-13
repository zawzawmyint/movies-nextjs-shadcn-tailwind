import { Button } from "@/components/ui/button";
import React from "react";

const IconButton = ({ name, icon, variant }) => {
  return (
    <Button variant={variant}>
      {icon}
      {name}
    </Button>
  );
};

export default IconButton;
