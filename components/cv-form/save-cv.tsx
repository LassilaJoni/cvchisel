import React from "react";
import { Button } from "@chakra-ui/react";

const SaveCVButton = ({ onClick, isLoading }) => {
  return (
    <Button onClick={onClick} isLoading={isLoading}>
      Save CV
    </Button>
  );
};

export default SaveCVButton;
