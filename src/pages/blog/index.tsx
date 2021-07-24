import Head from "next/head"
import { MotionFlex } from "@components/chakra/motionComponents"
import Navbar from "@components/navbar"
import { containerAnimation } from "@typedefs/constants"
import { getAllFilesFrontMatter } from "@lib/mdx"
import { Center, SimpleGrid, FormControl, VisuallyHidden, Button, InputGroup, Input, InputRightElement, FormLabel } from "@chakra-ui/react"
import IFrontMatter from "@typedefs/frontMatter"
import PostCard from "@components/posts/card"
import { useState } from "react"
import Fuse from "fuse.js"

export default function Blog({ posts }: { posts: IFrontMatter[] }): JSX.Element {

    const [search, setSearch] = useState("");
    const fuse = new Fuse(posts, { keys: ["title", "date"] });
    const results = fuse.search(search);
    let postResults = results.map((r) => r.item);
    if (postResults.length < 1) {
        postResults = posts;
    }

    return (
        <MotionFlex
            as="main"
            maxW="4xl"
            w="full"
            mx="auto"
            p={4}
            pt={0}
            justify="center"
            align="center"
            direction="column"
            basis={0}
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
            <form
                style={{ width: "100%" }}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <FormControl id="projectSearch">
                    <VisuallyHidden>
                        <FormLabel>Search</FormLabel>
                    </VisuallyHidden>
                    <InputGroup size="md">
                        <Input
                            type="text"
                            placeholder="Search a post"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <InputRightElement w="4.5rem" pr={1}>
                            <Button size="sm" type="submit">
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </form>
            <Center w="full" mt={8}>
                <SimpleGrid columns={[1, null, null, 2]} spacing={8}>
                    {postResults.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </SimpleGrid>
            </Center>
        </MotionFlex>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter();
    return { props: { posts } };
}
