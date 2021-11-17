import Layout from "@components/layout";
import { getAllFilesFrontMatter } from "@lib/mdx";
import {
  Center,
  SimpleGrid,
  FormControl,
  VisuallyHidden,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  FormLabel,
} from "@chakra-ui/react";
import IFrontMatter from "@typedefs/frontMatter";
import PostCard from "@components/posts/card";
import { useState } from "react";
import Fuse from "fuse.js";
import Navbar from "@components/navbar";

interface Props {
  posts: IFrontMatter[];
}

export default function Blog({ posts }: Props): JSX.Element {
  const [search, setSearch] = useState("");
  const fuse = new Fuse(posts, { keys: ["title", "date"] });
  const postResults =
    search === "" ? posts : fuse.search(search).map((r) => r.item);

  return (
    <Layout title="Posts" desc="All the blogs written by Juan">
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
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  posts.sort((a: IFrontMatter, b: IFrontMatter): number => {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });
  return { props: { posts } };
}
