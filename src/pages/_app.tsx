import '@styles/globals.css'

//@ts-ignore
import { MDXProvider } from '@mdx-js/react'
import { ChakraProvider } from "@chakra-ui/react"
import Theme from "@chakraTheme"
import type { AppProps } from 'next/app'
import CodeBlock from "@components/codeBlock"
import { H1, H2, H3, H4 } from "@components/chakraComponents"


const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    code: CodeBlock,
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={Theme}>
            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </ChakraProvider>
    )
}
export default MyApp
