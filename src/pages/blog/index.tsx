import Head from "next/head"
import { MotionFlex } from "@components/chakra/motionComponents"
import Navbar from "@components/navbar"
import { containerAnimation } from "@typedefs/constants"

export default function Blog() {
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
        </MotionFlex>
    )
}
