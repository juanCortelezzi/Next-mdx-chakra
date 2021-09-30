import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";
import { MotionBox } from "@components/chakra/motionComponents";
import Navbar from "@components/navbar";
import { containerAnimation } from "@typedefs/constants";
import { LinkLocal } from "@components/chakra/links";

export default function Home() {
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
        <title>Juanbs Blog</title>
        <meta name="description" content="My new blog in markdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Heading as="h1" size="xl">
        Juan Bautista Cortelezzi
      </Heading>
      <Text mt={2}>
        Welcome to my slice of the internet. My name is Juan Bautista, I'm an
        Argentinian junior software developer and student at UADE university.
      </Text>
      <Text mt={2}>
        In this page you will be able to see my current project by clicking on
        the{" "}
        <LinkLocal href="/projects" color="teal.400">
          Projects
        </LinkLocal>{" "}
        link up top. As well taking a look to my latest blogs/tutorials on the{" "}
        <LinkLocal href="/blog" color="teal.400">
          blog
        </LinkLocal>{" "}
        link besides the projects one
      </Text>
    </MotionBox>
  );
}
