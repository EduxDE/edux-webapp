import React from 'react';
import { Avatar, Navbar, Spacer, Text, useTheme } from '@nextui-org/react'
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <Navbar isBordered={isDark}>
      <Navbar.Brand>
        <Avatar src='favicon.ico' size={'sm'} />
        <Spacer x={0.25} />
        <Text b>Edux</Text>
      </Navbar.Brand>
      <Navbar.Content variant={'highlight'}>
        <Navbar.Link href='#' isActive>Home</Navbar.Link>
        <Navbar.Link href='/login'>Login</Navbar.Link>
        <Navbar.Link href='#'>Ipsum</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <ThemeToggle />
        <Avatar />
      </Navbar.Content>
    </Navbar>
  )
}

export default Header
