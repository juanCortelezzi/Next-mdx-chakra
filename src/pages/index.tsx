import { Heading, Text } from "@chakra-ui/react";
import { LinkLocal } from "@components/chakra/links";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout title="Home" desc="My personal Blog in markdown">
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
    </Layout>
  );
}
