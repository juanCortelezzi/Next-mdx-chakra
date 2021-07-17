import { Heading } from "@chakra-ui/react"
import { ReactChildren } from "react"

export function H1({ children }: { children: ReactChildren }): JSX.Element {
    return (<Heading as="h1" size="4xl">{children}</Heading>)
}

export function H2({ children }: { children: ReactChildren }): JSX.Element {
    return (<Heading as="h2" size="3xl">{children}</Heading>)
}

export function H3({ children }: { children: ReactChildren }): JSX.Element {
    return (<Heading as="h3" size="2xl">{children}</Heading>)
}

export function H4({ children }: { children: ReactChildren }): JSX.Element {
    return (<Heading as="h4" size="1xl">{children}</Heading>)
}
