import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
