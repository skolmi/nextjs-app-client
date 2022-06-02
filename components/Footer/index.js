import Logo from '../Logo';

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
        <Box  bgColor={'#007B77'} textColor={'white'}>
                <Container className='row'  maxW={'120ch'}>
                <Container className='col'                  
                 py={6}
                 as={Stack}
                 spacing={4}
                 textAlign={'left'}   
                 padding={'20px'}
                 margin={'10px'}

               >
            
                <Logo  />
                <Text
                 padding={'5px'}
                 margin={'5px'}>© 2022 Skolmi S.A Todos  <br></br> los derechos reservados</Text>                               
            </Container>

            <Container className='col' 
          padding={'20px'}
          margin={'10px'}
            spacing={4}
            as={Stack}
          
            
            >
            <Stack direction={'column'} spacing={6}>
                    <Link href={'#'}>Nosotros</Link>
                    <Link href={'#'}>Escuelas de padres</Link>
                    <Link href={'#'}>¿Quiénes Somos?</Link>
                    <Link href={'#'}>Certificación</Link>
                </Stack>
            </Container>

            <Container className='col' 
          padding={'20px'}
          margin={'10px'}
         spacing={4}
         as={Stack} >
         <Stack direction={'column'} spacing={6}>
                 <Link href={'#'}>¿Preguntas?</Link>
                 <Link href={'#'}>Preguntas <br></br> frecuentes</Link>                
             </Stack>
         </Container>
          
    
           
                <Container className='col' 
               
               padding={'20px'}
               margin={'10px'}
              spacing={4}
            
                    >
                  
                    <Stack direction={'column'} spacing={6}>
                        <Text>Contactanós</Text>
                        <SocialButton label={'Twitter'} href={'#'}> 
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
                </Container>
            </Box>
      
    );
}