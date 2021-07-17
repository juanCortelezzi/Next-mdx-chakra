import '@styles/globals.css'
import type { AppProps } from 'next/app'
//@ts-ignore
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from "../components/codeBlock"


const components = {
    code: CodeBlock,
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={components}>
            <Component {...pageProps} />
        </MDXProvider>
    )
}
export default MyApp
