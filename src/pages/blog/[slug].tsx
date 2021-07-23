import Head from "next/head"
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote';
import Navbar from "@components/posts/navbar"
import { MotionBox } from "@components/chakra/motionComponents"
import { getFiles, getFileBySlug } from "@lib/mdx"
import { containerAnimation } from "@typedefs/constants"

export default function Post({ mdxSource, frontMatter }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
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
            <MDXRemote {...mdxSource} />
        </MotionBox>
    )
}

interface IStaticPropsContext extends GetStaticPropsContext {
    params: {
        slug: string
    }
}

export async function getStaticPaths() {
    const posts = await getFiles();
    return {
        paths: posts.map((p): { params: { slug: string } } => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    };
}

export async function getStaticProps({ params }: IStaticPropsContext) {
    const post = await getFileBySlug(params.slug as string);
    return { props: { ...post } };
}
