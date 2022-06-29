import Script from 'next/script';
import Footer from '../Footer';
import OtherHeader from '../OtherHeader';
import LinkBar from '../LinkBar';
import Head from 'next/head';

import { Box } from '@chakra-ui/react';
import style from './layout.module.css'


export default function Layout({ children }) {
    return (
        <Box>
            <Head>
                <title>Skolmi</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWD8F53927"></script>
                <script>
{`                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-NWD8F53927');`}
                </script>
            </Head>
            <LinkBar />
            <OtherHeader />
            <main>{children}</main>
            <Footer />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        </Box>
    )
}
