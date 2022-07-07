import Script from 'next/script';
import Footer from '../Footer';
import OtherHeader from '../OtherHeader';
import LinkBar from '../LinkBar';
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react';

=======
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import style from './layout.module.css';
>>>>>>> b511db900a6520b5ead149f49153d9721acbf586

export default function Layout({ children }) {

    return (
<<<<<<< HEAD
        <ChakraProvider>
                <LinkBar />
                <OtherHeader />
                <main>{children}</main>
                <Footer />
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        </ChakraProvider>
=======
        <Box>
            <Head>
                <title>Skolmi</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWD8F53927"></script>
                <script>
                 {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-NWD8F53927');`}
                </script>
            </Head>
            <LinkBar />
            <OtherHeader />
            {/* {showModal ?
                <div className={style.modal}>
                    <div>
                        <p>Dejanos un mensaje y te responderemos lo mas pronto posible</p>
                    </div>
                </div>: null} */}
            <main>{children}</main>
            <Footer />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        </Box>
>>>>>>> b511db900a6520b5ead149f49153d9721acbf586
    )
}
