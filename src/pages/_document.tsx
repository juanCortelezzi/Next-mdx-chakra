import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "@chakraTheme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title key="title">Juanbs Blog</title>
          <meta
            key="description"
            name="description"
            content="My new blog in markdown"
          />
          <link key="favicon" rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
