import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  place-content: center;
`;

export const Head = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(to right, var(--green), var(--blue));
  position: relative;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 105%;
    width: 105%;
    border-radius: 50%;
    background: inherit;
    filter: blur(6px);
  }
`;

export const Body = styled.div`
  width: 120px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(to right, var(--green), var(--blue));
  position: relative;
  z-index: 8;
  left: 40px;
  bottom: 25px;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 105%;
    width: 105%;
    border-radius: 50%;
    background: inherit;
    filter: blur(6px);
  }
`;
