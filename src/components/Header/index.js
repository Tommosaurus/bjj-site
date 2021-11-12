import React from "react";
import { Box, Heading, Stack, Image, Button, Link } from "@chakra-ui/react";
import logoJFGF from "../../images/logoJFGF_s1.png";
import logoBJJ from "../../images/logoBJJ_s1.png";
import logoCSW from "../../images/logoCSW_s1.png";
import logoKali from "../../images/logoKali_s1.png";
import logoMajapant from "../../images/logoMajapant_s1.png";
import logoMuay from "../../images/logoMuay_s1.png";
import Rick from "../../images/rick-cutout-colour-removebg-preview.png";
import { FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <Box bg="#36454f" >
      <Box maxW="sm" borderWidth="5px" borderColor="red" borderRadius="lg" align="center" overflow="hidden">
        <Box display="flex" flexDirection="column" align="center">
          <Heading textColor="white" fontWeight="semibold" fontFamily="Arial">
            Rick Young's
          </Heading>
          <Heading textColor="white" fontWeight="semibold" fontFamily="Arial">
            Black Belt Academy
          </Heading>

          <Button width="100px" colorScheme="facebook" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
        </Box>
        <Stack direction="row" align="center" justify="center">
          <Image
            boxSize="80px"
            objectFit="cover"
            src={`${logoBJJ}`}
            alt="gracie barra logo"
          />
          <Image
            boxSize="80px"
            objectFit="cover"
            src={`${logoMajapant}`}
            alt="gracie barra logo"
          />
          <Image
            boxSize="80px"
            objectFit="cover"
            src={`${logoJFGF}`}
            alt="gracie barra logo"
          />
          <Image
            boxSize="80px"
            objectFit="cover"
            src={`${logoKali}`}
            alt="gracie barra logo"
          />
          <Image
            boxSize="80px"
            objectFit="cover"
            src={`${logoMuay}`}
            alt="gracie barra logo"
          />
          <Image
            boxSize="80px"
            objectFit="cover"
            src={`${logoCSW}`}
            alt="gracie barra logo"
          />
        </Stack>
      </Box>
      
    </Box>
  );
}
