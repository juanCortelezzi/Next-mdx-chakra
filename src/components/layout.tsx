import { containerAnimation } from "@typedefs/constants";
import { MotionBox } from "@components/chakra/motionComponents";
import Navbar from "@components/navbar";
import { ReactNode } from "react";
import Head from "next/head";

interface IProps {
  children: ReactNode;
  title: string;
  desc: string;
}

export default function Layout({ children, title, desc }: IProps) {
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
      <Head>
        <title key="title">Juan's Blog: {title}</title>
        <meta key="description" name="description" content={desc} />
      </Head>
      <Navbar />
      {children}
    </MotionBox>
  );
}
