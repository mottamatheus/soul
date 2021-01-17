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
  height: 180px;
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
  border-radius: 40%;
  background: linear-gradient(to right, var(--green), var(--blue));
  position: relative;
  z-index: 8;
  left: 50px;
  display: flex;
  bottom: 45px;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 105%;
    width: 105%;
    border-radius: 40%;
    background: inherit;
    filter: blur(6px);
  }
`;

export const EyeLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 50px;
  top: 55px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.95),
    rgba(250, 250, 250, 0.95)
  );
  box-shadow: 0px 0px 3px 2px #727fb7;
`;

export const EyeRight = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 50px;
  top: 60px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.95),
    rgba(250, 250, 250, 0.95)
  );
  box-shadow: 0px 0px 3px 2px #727fb7;
`;

export const Eyeball = styled.div`
  width: 22px;
  height: 20px;
  background-image: radial-gradient(
    farthest-corner at 10px 15px,
    #8e80f2 0%,
    #6937cd 100%
  );
  border-radius: 50%;
  position: absolute;
  left: 15px;
  top: 17px;
`;
