import style from './testimony.module.css';

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Testimony() {
    return (
        <Center py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                overflow={'Visible'}
                borderRadius={'lg'}
                className={`${style.card} ${style.roundedCard}`}
            >
                <Flex justify={'center'} mt={-70}  >
                    <Image
                        boxSize={'136px'}
                        src={
                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }
                        borderRadius='full'
                        alt={'Author'}
                        css={{
                            border: '7px solid #00194A',
                        }}
                    />
                </Flex>

                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Daniel Romero
                        </Heading>
                        <Text color={'gray.500'}>Estudiante grado 11°</Text>
                        <Text color={'gray.500'}>Cantante</Text>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text textAlign={'center'} color={'gray.500'}>“Estudiar en Skolmi me ha permitido dedicar más tiempo a mi talento qué es cantar, mientras disfruto de estudiar virtual.”</Text>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}