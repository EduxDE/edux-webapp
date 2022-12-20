import React from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import { Container, Spacer, Text } from '@nextui-org/react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Edux</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Spacer />
        <Container sm>
          <Text
            h1
            size={'$5xl'}
            weight={'bold'}
            css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
          >
            Bundesweites Bewerbungssystem
            für Arbeitgeber sowohl auch
            Ausbildungs- und Arbeitssuchende
          </Text>
        </Container>
        <Spacer />
      </main>
    </>
  )
}

export default Home
