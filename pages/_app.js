import '../global.css'
import "bootstrap/dist/css/bootstrap.css";
// import Head from 'next/head';

import CustomHead from '../components/CustomHead';

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <CustomHead/>
            <Component{...pageProps} />,
        </>
    )

}