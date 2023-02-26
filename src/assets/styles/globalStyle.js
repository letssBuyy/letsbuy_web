import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'PoppinsLight';
      src: url('/fonts/Poppins-Light.ttf');
    }
    
    @font-face {
      font-family: 'PoppinsThin';
      src: url('/fonts/Poppins-Thin.ttf');
    }

    @font-face {
      font-family: 'PoppinsRegular';
      src: url('/fonts/Poppins-Regular.ttf');
    }

    @font-face {
      font-family: 'PoppinsMedium';
      src: url('/fonts/Poppins-Medium.ttf');
    }

    @font-face {
      font-family: 'PoppinsSemiBold';
      src: url('/fonts/Poppins-SemiBold.ttf');
    }

    @font-face {
      font-family: 'PoppinsBold';
      src: url('/fonts/Poppins-Bold.ttf');
    }

    button {
      outline: none;
      border: 0;
      cursor: pointer;
    }
`;