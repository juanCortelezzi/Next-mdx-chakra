import { containerAnimation } from "@typedefs/constants";
import { MotionBox } from "@components/chakra/motionComponents";
import Navbar from "@components/navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MotionBox
      as="main"
      maxW="4xl"
      w="full"
      mx="auto"
      p={4}
      pt={0}
      variants={containerAnimation}
      exit="initial"
      initial="initial"
      animate="animate"
    >
      <Navbar />
      {children}
    </MotionBox>
  );
}
