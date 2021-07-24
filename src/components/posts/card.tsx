import Image from "next/image";
import { Box, Avatar, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { LinkOverlay } from "@components/chakra/links";
import { MotionLinkBox } from "@components/chakra/motionComponents";
import { parseDate } from "@lib/parseDate";
import IFrontMatter from "@typedefs/frontMatter"

const container = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { ease: [0.6, -0.05, 0.01, 0.99], duration: 0.6 } },
};


export default function PostCard({ post }: { post: IFrontMatter; }): JSX.Element {
    const shadow = useColorModeValue("2xl", "none");
    const borderColor = useColorModeValue("gray.400", "gray.700");
    const textColor = useColorModeValue("gray.500", "gray.400");

    return (
        <MotionLinkBox
            as="article"
            borderWidth="1px"
            borderRadius="lg"
            borderColor={borderColor}
            overflow="hidden"
            boxShadow={shadow}
            variants={container}
        >
            <LinkOverlay href={`/posts/${post.slug}`}>
                <Image
                    src={post.image}
                    width={2000}
                    height={1000}
                    layout="responsive"
                    alt={post.title} />
            </LinkOverlay>
            <Box p={4}>
                <LinkOverlay href={`/blog/${post.slug}`}>
                    <Box fontWeight="semibold" as="h2" fontSize="2xl" isTruncated>
                        {post.title}
                    </Box>
                    <Box fontWeight="regular" as="p" fontSize="lg" isTruncated>
                        {post.description}
                    </Box>
                </LinkOverlay>
                <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm" mt="2">
                    <Text fontSize="md" color={textColor}>
                        {parseDate(post.date)} &bull; {post.author}
                    </Text>
                </Box>
            </Box>
        </MotionLinkBox>
    );
}

