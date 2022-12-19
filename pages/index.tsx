import React from 'react';
import Head from 'next/head'
import { Avatar, Button, Navbar, Spacer, Text, useTheme } from '@nextui-org/react'
import ThemeToggle from '../components/ThemeToggle'

const Home: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <>
      <Head>
        <title>Edux</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar isBordered={isDark}>
          <Navbar.Brand>
            <Avatar src='favicon.ico' size={'sm'} />
            <Spacer x={0.25} />
            <Text b>Edux</Text>
          </Navbar.Brand>
          <Navbar.Content variant={'highlight'}>
            <Navbar.Link href='#' isActive>Home</Navbar.Link>
            <Navbar.Link href='#'>Lorem</Navbar.Link>
            <Navbar.Link href='#'>Ipsum</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <ThemeToggle />
            <Avatar />
          </Navbar.Content>
        </Navbar>
      </main>
    </>
  )
}

export default Home
