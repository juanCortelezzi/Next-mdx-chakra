import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
}

export default function PostImage({ src, alt }: IProps) {
  return (
    <Center>
      <Box w="full" borderRadius="lg" overflow="hidden">
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1300}
          layout="responsive"
          objectFit="cover"
        />
      </Box>
    </Center>
  );
}
