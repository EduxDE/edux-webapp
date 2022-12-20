import React from 'react';
import Head from 'next/head'
import { Button, Card, Checkbox, Container, Input, Link, Spacer, Text, useTheme } from '@nextui-org/react';
import { RiMailLine, RiLockPasswordLine, RiUserLine } from 'react-icons/ri'

const Register: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <>
      <Head>
        <title>Registrieren | Edux</title>
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
              Registrieren
            </Text>
            <Card.Divider />
            <Spacer />
            <Input
              fullWidth
              bordered={isDark}
              placeholder='Vorname'
              contentLeft={<RiUserLine />}
            />
            <Spacer />
            <Input
              fullWidth
              bordered={isDark}
              placeholder='Nachname'
              contentLeft={<RiUserLine />}
            />
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
            <Input.Password
              bordered={isDark}
              placeholder='Passwort wiederholen'
              contentLeft={<RiLockPasswordLine />}
            />
            <Spacer />
            <Checkbox size={'md'}>
              <Text>Ich stimme den <a>Nutzungsbedingugen</a> zu.</Text>
            </Checkbox>
            <Spacer />
            <Button shadow={isDark}>Registrieren</Button>
            <Spacer />
            <Card.Divider />
            <Spacer />
            <Link href='/login' css={{ as: 'center', m: '5px' }}>Anmelden</Link>
          </Card>
        </Container>
      </main>
    </>
  )
}

export default Register
