import Rick from "../../images/rick-cutout-colour-removebg-preview.png";
import { Image } from "@chakra-ui/image";
import React from "react";

export default function RickImage() {
  return (
    <Image
      boxSize="400px"
      objectFit="cover"
      src={`${Rick}`}
      alt="cutout of rick"
    />
  );
}
