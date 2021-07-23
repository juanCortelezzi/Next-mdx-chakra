import NextLink from "next/link";
import { Link as ChakraLink, LinkOverlay as ChakraLinkOverlay } from "@chakra-ui/react";
import { ReactNode } from "react"

interface IProps {
    href: string;
    children: ReactNode;
    [index: string]: any;
}

export function Link({ href, children, ...rest }: IProps): JSX.Element {
    return (
        <NextLink href={href} passHref>
            <ChakraLink {...rest}>{children}</ChakraLink>
        </NextLink>
    );
}

export function LinkOverlay({ href, children, ...rest }: IProps): JSX.Element {
    return (
        <NextLink href={href} passHref>
            <ChakraLinkOverlay {...rest}>{children}</ChakraLinkOverlay>
        </NextLink>
    );
}
