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

export default function TestimonyCard({children, name, study, ocupation, text}) {
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
                    {children}
                </Flex>

                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {name}
                        </Heading>
                        <Text color={'gray.500'}>{study}</Text>
                        <Text color={'gray.500'}>{ocupation}</Text>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text textAlign={'center'} color={'gray.500'}>{text}</Text>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}