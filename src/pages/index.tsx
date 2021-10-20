import { Heading, Text } from "@chakra-ui/react";
import { LinkLocal } from "@components/chakra/links";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout title="Home" desc="My personal Blog in markdown">
      <Heading as="h1" size="xl">
        Hey, i&apos;m Juan Cortelezzi
      </Heading>
      <Text mt={2}>
        I&apos;m a self taught web developer, currently studying software
        engeneering at UADE University. You&apos;ve found my personal slice of
        the internet, feel free to look around.
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
