import { Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { MotionLinkBox } from "@components/chakra/motionComponents";
import { LinkOverlay } from "@components/chakra/links";
import { parseDate } from "@lib/parseDate";
import { IProject } from "@typedefs/projects";
import { containerAnimation } from "@typedefs/constants";

interface Props {
  project: IProject;
}

export default function ProjectCard({ project }: Props) {
  const shadow = useColorModeValue("2xl", "none");
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const textColor = useColorModeValue("gray.500", "gray.400");
  return (
    <MotionLinkBox
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor}
      overflow="hidden"
      boxShadow={shadow}
      variants={containerAnimation}
      p={4}
      my={3}
    >
      <LinkOverlay href={project.url}>
        <Heading as="h2" fontWeight="semibold" fontSize="2xl" isTruncated>
          {project.name}
        </Heading>
      </LinkOverlay>
      <Text my={2}>{project.description}</Text>
      <Text fontSize="md" color={textColor}>
        Created at: {parseDate(project.createdAt)} &bull; Last updated{" "}
        {parseDate(project.updatedAt)}
      </Text>
    </MotionLinkBox>
  );
}
