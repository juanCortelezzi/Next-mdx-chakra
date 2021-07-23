import { Flex, Spacer } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ThemeSwitch from "@components/chakra/themeSwitch";
import { Link } from "@components/chakra/links";

export default function PostNavbar() {
    return (
        <Flex justify="center" align="center" my={10}>
            <Link href="/blog" fontSize="2xl" fontWeight="semibold">
                <ArrowBackIcon /> Blog
            </Link>
            <Spacer />
            <ThemeSwitch />
        </Flex>
    );
};
