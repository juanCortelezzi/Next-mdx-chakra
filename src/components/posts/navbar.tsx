import { Flex, Spacer } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ThemeSwitch from "@components/chakra/themeSwitch";
import { LinkLocal } from "@components/chakra/links";

export default function PostNavbar() {
  return (
    <Flex justify="center" align="center" my={10}>
      <LinkLocal href="/blog" fontSize="2xl" fontWeight="semibold">
        <ArrowBackIcon /> Blog
      </LinkLocal>
      <Spacer />
      <ThemeSwitch />
    </Flex>
  );
}
