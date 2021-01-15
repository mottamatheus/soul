import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    --bg: #191c1c;
    --green: #84fab0;
    --blue: #8fd3f4;
    --bg-card: #dfe3f2;
    --text-primary: #2C3A47;
    --text-secondary: #B33771;
    --image-shade: linear-gradient(
        0deg,
        rgba(179, 55, 161, 0.1),
        rgba(179, 55, 161, 0.1)
      );
    --gradient: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    font-size: 1.8rem;
  }

  body {
    overflow-y: overlay;
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
    position: relative;
    background: linear-gradient(-45deg, #c4bade, #e6f1ff, #ffebfe);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite; }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 70% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    body::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='10 10 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.22' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
      z-index: -1;
    }

`;
