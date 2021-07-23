import { Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { MotionLinkBox } from "@components/chakra/motionComponents";
import { LinkOverlay } from "@components/chakra/links";
import { parseDate, parseDateFromNow } from "@lib/parseDate";

const container = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { ease: [0.6, -0.05, 0.01, 0.99], duration: 0.6 } },
};

interface IProps {
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    html_url: string
}

export default function ProjectCard({ name, description, created_at, updated_at, html_url }: IProps) {
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
            variants={container}
            p={4}
            my={3}
        >
            <LinkOverlay href={html_url}>
                <Heading as="h2" fontWeight="semibold" fontSize="2xl" isTruncated>
                    {name}
                </Heading>
            </LinkOverlay>
            <Text my={2}>{description}</Text>
            <Text fontSize="md" color={textColor}>
                Created at: {parseDate(created_at)} &bull; Last updated {parseDateFromNow(updated_at)}
            </Text>
        </MotionLinkBox>
    );
}
