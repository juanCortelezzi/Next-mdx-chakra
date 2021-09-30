import Head from "next/head";
import { GetStaticPropsContext } from "next";
import { MDXRemote } from "next-mdx-remote";
import Navbar from "@components/posts/navbar";
import { MotionBox } from "@components/chakra/motionComponents";
import { getFiles, getFileBySlug, IGetFileBySlugResponse } from "@lib/mdx";
import { containerAnimation } from "@typedefs/constants";
import { Heading, Box, HStack, Text } from "@chakra-ui/react";
import { parseDate } from "@lib/parseDate";
import Image from "next/image";

export default function Post({
  mdxSource,
  frontMatter,
}: IGetFileBySlugResponse): JSX.Element {
  return (
    <MotionBox
      as="main"
      maxW="4xl"
      w="full"
      mx="auto"
      p={4}
      pt={0}
      variants={containerAnimation}
      exit="initial"
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Heading as="h1" size="2xl" my={8}>
        {frontMatter.title}
      </Heading>
      <Box mb={4} borderRadius="lg" overflow="hidden">
        <Image
          src={frontMatter.image}
          width={2000}
          height={1000}
          layout="responsive"
        />
      </Box>
      <HStack spacing={4} mt={4} mb={8}>
        <Text fontSize="xl">
          {frontMatter.author} &bull; {parseDate(frontMatter.date)} &bull;{" "}
          {frontMatter.wordCount} words
        </Text>
      </HStack>
      <MDXRemote {...mdxSource} />
    </MotionBox>
  );
}

interface IStaticPropsContext extends GetStaticPropsContext {
  params: {
    slug: string;
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  return {
    paths: posts.map((p): { params: { slug: string } } => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: IStaticPropsContext) {
  const { mdxSource, frontMatter } = await getFileBySlug(params.slug as string);
  return { props: { mdxSource, frontMatter } };
}
