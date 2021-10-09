import Head from "next/head";
import { useState } from "react";
import Fuse from "fuse.js";
import Layout from "@components/layout";
import ProjectCard from "@components/projectCard";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormLabel,
  FormControl,
  VisuallyHidden,
  Box,
  Flex,
} from "@chakra-ui/react";
import { IProject, IRawProject } from "@typedefs/projects";

export default function Projects({
  projects,
}: {
  projects: IProject[];
}): JSX.Element {
  const [search, setSearch] = useState("");
  const fuse = new Fuse(projects, { keys: ["name", "description"] });
  const results =
    search === "" ? projects : fuse.search(search).map((r) => r.item);

  return (
    <Layout>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Flex>
          <FormControl id="projectSearch">
            <VisuallyHidden>
              <FormLabel>Search</FormLabel>
            </VisuallyHidden>
            <InputGroup size="md">
              <Input
                type="text"
                placeholder="Search a project"
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
        </Flex>
      </form>
      <Box w="full">
        {results.map((d) => (
          <ProjectCard key={d.id} project={d} />
        ))}
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  const rawUnparsedProjects = await fetch(
    "https://api.github.com/users/juancortelezzi/repos"
  );
  const rawProjects = await rawUnparsedProjects.json();

  if (!rawProjects) {
    return {
      projects: [],
    };
  }

  const projects = rawProjects.reduce(
    (data: IProject[], project: IRawProject): IProject[] => {
      return [
        ...data,
        {
          id: project.id,
          name: project.name,
          description: project.description,
          createdAt: project.created_at,
          updatedAt: project.updated_at,
          url: project.html_url,
        },
      ];
    },
    []
  );

  return {
    props: {
      projects,
    },
  };
}
