//@ts-ignore
import { MDXProvider } from "@mdx-js/react";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "@chakraTheme";
import type { AppProps } from "next/app";
import components from "@components/chakra/mdxComponents";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
export default MyApp;
