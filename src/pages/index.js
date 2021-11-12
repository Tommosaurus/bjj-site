import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { Box } from "@chakra-ui/layout";

export default function IndexPage() {
  return (
    <Box bg="grey">
      <Header />
      <MainContent />
    </Box>
  );
}
