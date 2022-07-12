import Script from 'next/script';
import Footer from '../Footer';
import OtherHeader from '../OtherHeader';
import LinkBar from '../LinkBar';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { ChakraProvider } from '@chakra-ui/react';
import style from './layout.module.css';


export default function Layout({ children }) {

    return (
        <ChakraProvider>
            <LinkBar />
            <OtherHeader />
            <main>{children}</main>
            <FloatingWhatsApp
                phoneNumber="+573023881611"
                accountName="Skolmi"
                allowClickAway
                notification
                notificationDelay={60000} // 1 minute
                chatMessage=' ¡ Estamos para ayudarte !, te responderemos en el menor tiempo posible'
                className={style.floating_Whatsapp}
            />
            <Footer />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        </ChakraProvider>
    )
}
