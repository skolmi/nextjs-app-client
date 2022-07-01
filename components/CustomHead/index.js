import Head from 'next/head';
import favicon from '/public/Favicom.png';



const CustomHead = ({ title = 'skolmi' }) => (
    <Head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel='icon' href='/Favicom.png'></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWD8F53927"></script>
        <script>
            {`                    window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NWD8F53927');`}
        </script>
    </Head>
);

export default CustomHead;