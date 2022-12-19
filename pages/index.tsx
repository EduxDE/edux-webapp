import React from 'react';
import Head from 'next/head'
import { Button } from '@nextui-org/react'
import ThemeToggle from '../components/ThemeToggle'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Edux</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeToggle />
        <Button color={'gradient'} animated auto shadow rounded>Click me</Button>
      </main>
    </>
  )
}

export default Home
