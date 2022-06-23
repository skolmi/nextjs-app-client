import Logo from '../Logo';
import Image from 'next/image';
import LogoSkolmiWhite from './../../assets/Skolmi.png';
import iconyoutube from './../../assets/youtube.svg';
import iconfacebook from './../../assets/facebook.svg';
import iconinstagram from './../../assets/instagram.svg';
import iconwhatsaap from './../../assets/whatsapp.svg';
import logoIso from './../../assets/iconiso.png';

import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};


export default function Footer() {
    return (
        <footer>
            <Box bgColor={'#00194A'} textColor={'white'}>
                <Container className='row' maxW={'100ch'}>
                    <Container className='col'
                        py={6}
                        as={Stack}
                        spacing={6}
                        textAlign={'left'}
                        padding={'20px'}
                        margin={'10px'}

                    >
                        <Image src={LogoSkolmiWhite} alt='footer'></Image>
                        <Text fontSize={15}
                            padding={'5px'}
                            margin={'5px'}>© 2022 Skolmi S.A Todos  <br></br> los derechos reservados</Text>


                    </Container>

                    <Container className='col'
                        padding={'10px'}
                        margin={'10px'}
                        spacing={6}
                        as={Stack}


                    >
                        <Stack fontSize={15} direction={'column'} spacing={6}>
                            <Link href={'#'} fontWeight={600}>Nosotros</Link>
                            <Link href={'#'}>Escuelas de padres</Link>
                            <Link href={'#'}>¿Quiénes Somos?</Link>
                            <Link href={'#'}>Certificación</Link>
                        </Stack>
                    </Container>

                    <Container className='col'
                        padding={'10px'}
                        margin={'10px'}
                        spacing={6}
                        as={Stack} >
                        <Stack direction={'column'} fontSize={15} spacing={6}>
                            <Link href={'#'} fontWeight={600}>¿Preguntas?</Link>
                            <Link href={'#'}>Preguntas <br></br> frecuentes</Link>
                        </Stack>
                    </Container>



                    <Container className='col'

                        padding={'10px'}
                        margin={'10px'}


                    >
                        <Text fontSize={15} fontWeight={600}>Contactanós</Text>
                        <Stack direction={'row'} spacing={-5} py={'5'} >
                            <Container>
                                <a href='https://www.facebook.com/SkolmiGlobal'><Image src={iconfacebook} alt='footer'></Image> </a>

                            </Container>
                            <Container>
                                <a href='https://www.youtube.com/c/SkolmiGlobal/'><Image src={iconyoutube} alt='footer'></Image></a>
                            </Container>
                            <Container>
                                <a href='https://www.instagram.com/skolmiglobal/'><Image src={iconinstagram} alt='footer'></Image></a>
                            </Container>
                            <Container>
                                <a href='https://api.whatsapp.com/send?phone=573023881611'><Image src={iconwhatsaap} alt='footer'></Image></a>
                            </Container>

                        </Stack>
                    </Container>
                </Container>
                <Container className='col' direction={'row'} maxW={'90ch'}>
                    <Image src={logoIso} width={'120%'} height={'85%'} alt='footer'></Image>
                </Container>
            </Box>
        </footer>

    );
}