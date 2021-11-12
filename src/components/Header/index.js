import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
    <ChakraProvider>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading fontWeight="semibold" fontFamily="Arial">
          Rick Young's
        </Heading>
        <Heading fontWeight="semibold" fontFamily="Arial">
          Black Belt Academy
        </Heading>

        <Button
          onClick={() => {
            window.open("https://www.facebook.com/groups/62097309752/");
          }}
          colorScheme="facebook"
          leftIcon={<FaFacebook />}
        >
          Find us on Facebook
        </Button>
      </Box>
      <Stack
        marginBottom="15px"
        direction="row"
        align="center"
        justify="center"
      >
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
    </ChakraProvider>
  );
}
