import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkOverlay as ChakraLinkOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  [index: string]: any;
}

export function LinkExternal({ href, children, ...rest }: Props) {
  return (
    <ChakraLink href={href} color="teal.500" isExternal {...rest}>
      {children}
    </ChakraLink>
  );
}

export function LinkLocal({ href, children, ...rest }: Props): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
}

export function LinkOverlay({ href, children, ...rest }: Props): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <ChakraLinkOverlay {...rest}>{children}</ChakraLinkOverlay>
    </NextLink>
  );
}
