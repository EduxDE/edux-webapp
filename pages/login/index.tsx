import React from 'react';
import Head from 'next/head'
import { Button, Card, Container, Input, Link, Spacer, Text, useTheme } from '@nextui-org/react';
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri'

const LogIn: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <>
      <Head>
        <title>Anmelden | Edux</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container
          display={'flex'}
          justify={'center'}
          alignItems={'center'}
          css={{ minHeight: '100vh' }}
        >
          <Card css={{ mw: '400px', p: '20px' }}>
            <Text
              css={{ as: 'center', m: '10px' }}
              size={'$2xl'}
              b
            >
              Anmelden
            </Text>
            <Card.Divider />
            <Spacer />
            <Input
              fullWidth
              bordered={isDark}
              placeholder='E-Mail-Adresse'
              contentLeft={<RiMailLine />}
            />
            <Spacer />
            <Input.Password
              bordered={isDark}
              placeholder='Passwort'
              contentLeft={<RiLockPasswordLine />}
            />
            <Spacer />
            <Button shadow={isDark}>Anmelden</Button>
            <Spacer />
            <Card.Divider />
            <Spacer />
            <Link css={{ as: 'center', m: '5px' }}>Passwort vergessen?</Link>
            <Link css={{ as: 'center', m: '5px' }}>Registrieren</Link>
          </Card>
        </Container>
      </main>
    </>
  )
}

export default LogIn
