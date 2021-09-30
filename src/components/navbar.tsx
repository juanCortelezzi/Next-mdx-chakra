import { useRouter } from "next/router";
import { Heading, Flex, Spacer, HStack } from "@chakra-ui/react";
import ThemeSwitch from "@components/chakra/themeSwitch";
import { LinkLocal } from "@components/chakra/links";

export default function Navbar() {
  const router = useRouter();
  return (
    <Flex w="full" justify="center" align="center" my={10} grow={2}>
      <LinkLocal href="/">
        <Heading as="h1" fontWeight="medium">
          J.B.C
        </Heading>
      </LinkLocal>
      <Spacer />
      <HStack spacing={8}>
        <LinkLocal href="/blog">
          <Heading
            as="h2"
            size="md"
            color={router.pathname === "/blog" ? "" : "gray.400"}
            fontWeight="regular"
          >
            Blog
          </Heading>
        </LinkLocal>
        <LinkLocal href="/projects">
          <Heading
            as="h2"
            size="md"
            color={router.pathname === "/projects" ? "" : "gray.400"}
            fontWeight="regular"
          >
            Projects
          </Heading>
        </LinkLocal>
        <ThemeSwitch />
      </HStack>
    </Flex>
  );
}
