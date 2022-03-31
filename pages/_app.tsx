import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Visby Heavy';
    src: url('/fonts/VisbyHeavy.woff') format('woff');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
