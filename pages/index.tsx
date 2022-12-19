import Head from 'next/head'
import { Button } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edux</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button color={'gradient'} animated auto shadow rounded>Click me</Button>
      </main>
    </>
  )
}
