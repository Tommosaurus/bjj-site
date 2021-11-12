import Rick from "../../images/rick-cutout-colour-removebg-preview.png";
import { Image } from "@chakra-ui/image";
import React from "react";

export default function RickImage() {
  return (
    <Image
    
      objectFit="cover"
      src={`${Rick}`}
      alt="cutout of rick"
    />
  );
}
