import React from 'react';

import { Container, Head, Body, EyeLeft, EyeRight } from './styles';

const Bubble: React.FC = () => {
  return (
    <Container>
      <Head>
        <EyeLeft />
        <EyeRight />
      </Head>
      <Body />
    </Container>
  );
};

export default Bubble;
