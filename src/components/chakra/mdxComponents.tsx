import {
  As,
  Heading,
  Center,
  Box,
  Code,
  Text,
  Flex,
  Spacer,
  Divider,
  OrderedList,
  UnorderedList,
  ListItem,
  Thead,
  Tbody,
  Table,
  Td,
  Tr,
  Th,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import CodeTheme from "prism-react-renderer/themes/vsDark";
import { LinkExternal } from "@components/chakra/links";
import PostImage from "@components/posts/image";

interface IMdxProps {
  children: ReactNode;
}

interface IMdxCodeProps {
  children: any;
  className: string;
}

const margin = 4;
const marginTopHeader = 12;

function newHeader(as: As<any>): ({ children }: IMdxProps) => JSX.Element {
  const Header = ({ children }: IMdxProps) => (
    <Heading as={as} size="lg" mt={marginTopHeader} mb={margin}>
      {children}
    </Heading>
  );
  return Header;
}

function Paragraph({ children }: any) {
  // Hack to not throw error of div inside p
  //
  // It appears that Mdx wraps image objects with a "p" tag. Since the PostImage
  // component contains a div in order to center the image and scale it
  // properly, it throws a DOM error.
  //
  // This is my mere attempt to fix it. When a "p" tag is being rendered, check
  // that its children is only one and that it is an image. If it is, do not
  // render the "p" tag, just render its children.
  if (typeof children === "object" && children?.props?.originalType === "img") {
    return <>{children}</>;
  }
  return <Text>{children}</Text>;
}

function ListOrdered({ children }: IMdxProps): JSX.Element {
  return <OrderedList my={margin}>{children}</OrderedList>;
}

function ListUnordered({ children }: IMdxProps): JSX.Element {
  return <UnorderedList my={margin}>{children}</UnorderedList>;
}

function ThematicBreak(): JSX.Element {
  return <Divider my={margin} />;
}

// color={textColor}
function Strong({ children }: IMdxProps): JSX.Element {
  return (
    <Text as="b" fontSize="md" fontWeight="bold">
      {children}
    </Text>
  );
}

function Deleted({ children }: IMdxProps) {
  return <Text as="del">{children}</Text>;
}

function Emphasis({ children }: IMdxProps): JSX.Element {
  return <Text as="i">{children}</Text>;
}

function TableCustom({ children }: IMdxProps): JSX.Element {
  return (
    <Center my={margin}>
      <Box
        w={["xs", "md", "xl", "3xl"]}
        maxW="3xl"
        borderRadius="lg"
        overflow="hidden"
      >
        <Table>{children}</Table>
      </Box>
    </Center>
  );
}

function CodeBlock({ children, className }: IMdxCodeProps): JSX.Element {
  return (
    <Center my={margin} overflow="scroll">
      <Box w="full" h="full" borderRadius="lg">
        <Highlight
          {...defaultProps}
          code={children.trim()}
          language={className.replace(/language-/, "") as Language}
          theme={CodeTheme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Code
              className={className}
              style={{ ...style, padding: "20px", width: "100%" }}
            >
              {tokens.map(
                (line, i): JSX.Element => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              )}
            </Code>
          )}
        </Highlight>
      </Box>
    </Center>
  );
}

function BlockQuote({ children }: IMdxProps): JSX.Element {
  return (
    <Center my={margin}>
      <Flex
        w="xs"
        justify="center"
        align="center"
        direction="column"
        borderWidth="1px"
        borderRadius="lg"
        p={margin}
      >
        <Flex w="full">
          <Text as="i" fontSize="3xl" fontWeight="bold" align="center">
            &ldquo;
          </Text>
          <Spacer />
        </Flex>
        <Spacer />
        <Text as="i" fontSize="md" align="center" w={3 / 4}>
          {children}
        </Text>
        <Flex w="full">
          <Spacer />
          <Text as="i" fontSize="3xl" fontWeight="bold" align="center">
            &rdquo;
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
}

const components = {
  p: Paragraph,
  h1: newHeader("h2"),
  h2: newHeader("h3"),
  h3: newHeader("h4"),
  h4: newHeader("h5"),
  h5: newHeader("h6"),
  h6: newHeader("p"),
  blockquote: BlockQuote,
  ul: ListUnordered,
  ol: ListOrdered,
  li: ListItem,
  table: TableCustom,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  td: Td,
  th: Th,
  code: CodeBlock,
  inlineCode: Code,
  em: Emphasis,
  strong: Strong,
  del: Deleted,
  hr: ThematicBreak,
  a: LinkExternal,
  img: PostImage,
};

export default components;
