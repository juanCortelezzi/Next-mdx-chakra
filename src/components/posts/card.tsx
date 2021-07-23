import Image from "next/image";
import { Box, Avatar, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { LinkOverlay } from "@components/chakra/links";
import { MotionLinkBox } from "@components/chakra/motionComponents";
import { parseDate } from "@utils/parseDate";
import IPost from "@typedefs/post"

const container = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { ease: [0.6, -0.05, 0.01, 0.99], duration: 0.6 } },
};


export function PostCard({ post }: { post: IPost; }): JSX.Element {
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
                    src={post.coverImageUrl}
                    width={2000}
                    height={1000}
                    layout="responsive"
                    alt={post.title} />
            </LinkOverlay>
            <Box p={4}>
                <Box fontWeight="semibold" as="h2" fontSize="2xl" isTruncated>
                    <LinkOverlay href={`/posts/${post.slug}`}>{post.title}</LinkOverlay>
                </Box>
                <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm" mt="2">
                    <HStack spacing={4}>
                        <Avatar size="sm" name={post.author.name} src={post.author.pictureUrl} />
                        <Text fontSize="md" color={textColor}>
                            {post.author.name} &bull; {parseDate(post.date)}
                        </Text>
                    </HStack>
                </Box>
            </Box>
        </MotionLinkBox>
    );
}
