import React from 'react';

import { Container, Head, Body, EyeLeft, EyeRight, Eyeball } from './styles';

const Bubble: React.FC = () => {
  return (
    <Container>
      <Head>
        <EyeLeft>
          <Eyeball />
        </EyeLeft>
        <EyeRight>
          <Eyeball />
        </EyeRight>
      </Head>
      <Body />
    </Container>
  );
};

export default Bubble;
