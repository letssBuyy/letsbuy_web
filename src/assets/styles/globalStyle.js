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


    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;