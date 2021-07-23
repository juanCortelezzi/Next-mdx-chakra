import Head from 'next/head'
import { Heading } from "@chakra-ui/react"
import { MotionBox } from "@components/chakra/motionComponents"
import Navbar from "@components/navbar"
import { containerAnimation } from "@typedefs/constants"

export default function Home() {
    return (
        <MotionBox
            as="main"
            maxW="4xl"
            w="full"
            mx="auto"
            p={4}
            pt={0}
            variants={containerAnimation}
            exit="initial"
            initial="initial"
            animate="animate"
        >
            <Head>
                <title>Juanbs Blog</title>
                <meta name="description" content="My new blog in markdown" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Heading as="h1" size="2xl">Index</Heading>
        </MotionBox>
    )
}
