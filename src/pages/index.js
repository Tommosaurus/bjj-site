import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { Box } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/provider";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function IndexPage() {
  return (
    <ChakraProvider>
    <Box bg="grey">
    <Header />
    
    <Tabs align="center" variant="soft-rounded" colourScheme="darkblue">
  <TabList>
    <Tab>Home</Tab>
    <Tab>Biography</Tab>
    <Tab>Curriculum</Tab>
    <Tab>Children's Classes</Tab>
    <Tab>TimeTable & Fees</Tab>
    <Tab>Gallery</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    
      
      <MainContent />
    
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
   </ChakraProvider>
  );
}
