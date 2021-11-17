import { GetStaticPropsContext } from "next";
import { MDXRemote } from "next-mdx-remote";
import Navbar from "@components/posts/navbar";
import { getFiles, getFileBySlug, IGetFileBySlugResponse } from "@lib/mdx";
import { Heading, Box, HStack, Text } from "@chakra-ui/react";
import { parseDate } from "@lib/parseDate";
import Image from "next/image";
import Layout from "@components/layout";

export default function Post({
  mdxSource,
  frontMatter,
}: IGetFileBySlugResponse): JSX.Element {
  return (
    <Layout title="Posts" desc="All the blogs written by Juan">
      <Navbar />
      <Heading as="h1" size="2xl" my={8}>
        {frontMatter.title}
      </Heading>
      <Box mb={4} borderRadius="lg" overflow="hidden">
        <Image
          alt={frontMatter.title}
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
    </Layout>
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
