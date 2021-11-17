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
import Navbar from "@components/navbar";

interface Props {
  projects: IProject[];
}

export default function Projects({ projects }: Props): JSX.Element {
  const [search, setSearch] = useState("");
  const fuse = new Fuse(projects, { keys: ["name", "description"] });
  const results =
    search === "" ? projects : fuse.search(search).map((r) => r.item);

  return (
    <Layout title="Projects" desc="My coding projects">
      <Navbar />
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
  const rawProjects = await fetch(
    "https://api.github.com/users/juancortelezzi/repos"
  ).then((d) => d.json());

  if (!rawProjects) return { projects: [] };

  const projects = rawProjects.reduce(
    (projects: IProject[], p: IRawProject): IProject[] => {
      return [
        ...projects,
        {
          id: p.id,
          name: p.name,
          description: p.description,
          createdAt: p.created_at,
          updatedAt: p.updated_at,
          url: p.html_url,
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
