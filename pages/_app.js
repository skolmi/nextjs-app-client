import '../global.css'
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';


export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)


    return getLayout(
        <ChakraProvider>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script strategy="lazyOnload">
                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
            </Script>
            <Component{...pageProps} />,
        </ChakraProvider>
    )
}