import autonomia from '../../assets/autonomia.svg';
import economia from '../../assets/economia.svg';
import orientacion from '../../assets/orientacion.svg';
import tecnologia from '../../assets/tecnologia.svg';
import Image from "next/image";
import style from './Educationofert.module.css';
import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";

export default function Compenentes() {
    return (
        <Center margin={5} padding={10}>
            <Box
                margin={'5px'}
                maxW={'300px'}
                maxH={'300px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}
            >
                <Box margin={5}  marginTop={14} align={'center'}>
                <Image src={autonomia}  alt='footer'></Image>
                </Box>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading className={style.textHead} color={'#00194A'}> Autonomía </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Puedes estudiar desde cualquier parte del mundo y al horario que más te convenga.</Text>
                    </Stack>                   
                </Box>
            </Box>
            <Box
                margin={'5px'}
                maxW={'300px'}
                maxH={'300px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}
            >
                <Box margin={5}  marginTop={14} align={'center'}>
                <Image src={economia}  alt='footer'></Image>
                </Box>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading className={style.textHead} color={'#00194A'}> Economía </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Es un 63% más económico vs educación tradicional. Al ahorrar en gastos de transporte... etc</Text>
                    </Stack>                   
                </Box>
            </Box>
            <Box
                margin={'5px'}
                maxW={'300px'}
                maxH={'300px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}
            >
                <Box margin={5}  marginTop={14} align={'center'}>
                <Image src={tecnologia}  alt='footer'></Image>
                </Box>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading className={style.textHead} color={'#00194A'}> Tecnología </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Somos pioneros en educación virtual e innovadores mediante objetos de educación virtual.</Text>
                    </Stack>                   
                </Box>
            </Box>
            <Box
                margin={'5px'}
                maxW={'300px'}
                maxH={'300px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}
            >
                <Box margin={5}  marginTop={14} align={'center'}>
                <Image src={orientacion}  alt='footer'></Image>
                </Box>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading className={style.textHead} color={'#00194A'}> Orientación </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Contamos con orientación en diferentes procesos, desde psicologica hasta vocacional.</Text>
                    </Stack>                   
                </Box>
            </Box>
        </Center>
    );
}