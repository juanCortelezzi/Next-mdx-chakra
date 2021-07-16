import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Juanbs Blog</title>
                <meta name="description" content="My new blog in markdown" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Blog</h1>
        </div>
    )
}
