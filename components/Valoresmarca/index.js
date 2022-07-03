import style from './valoresmarca.module.css';
import Image from 'next/image';
import Innovacion from '../../assets/1.svg';
import Emancipacion from '../../assets/2.svg';
import Afectividad from '../../assets/3.svg';
import Creatividad from '../../assets/4.svg';

import{
    Heading,
    Avatar,
    Box,
    Center,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";

export default function EducationOnl(){
    return(

<Center margin={5} padding={10}>
            <Box 
                margin={'10px'}
                maxW={'310px'}
                height={'420px'}                
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'27px'}                
            >
                <Stack align={'center'} mb={5} padding={'15px'}>
                <Image className={style.imageicon} src={Innovacion}></Image>            
                </Stack>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead}>Innovación </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Buscamos actualización constante para desarrollar alternativas educativas y de comunicación, que permitan el acceso global al conocimiento.</Text>
                    </Stack>            
                </Box>
            </Box>
            <Box  
                          
                margin={'10px'}
                maxW={'310px'}
                height={'420px'}                
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'27px'}                
            >
                <Stack align={'center'} mb={5} padding={'15px'}>
                <Image className={style.imageicon} src={Emancipacion}></Image>            
                </Stack>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead}>Emancipación </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Creemos en la democracia educativa, motivamos la autonomía, la flexibilidad y la independencia del aprendizaje.</Text>
                    </Stack>            
                </Box>
            </Box>
 
            <Box                
                margin={'10px'}
                maxW={'310px'}
                height={'420px'}                
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'27px'}                
            >
                <Stack align={'center'} mb={5} padding={'15px'}>
                <Image className={style.imageicon} src={Afectividad}></Image>            
                </Stack>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead}>Afectividad</Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Brindamos una formación integral, inclusiva y afectiva.</Text>
                    </Stack>            
                </Box>
            </Box>
 
            <Box                
                margin={'10px'}
                maxW={'310px'}
                height={'420px'}                
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'27px'}                
            >
                <Stack align={'center'} mb={5} padding={'15px'}>
                <Image className={style.imageicon} src={Creatividad}></Image>            
                </Stack>
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead}>Creatividad</Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Creamos espacios y momentos dinámicos, que impulsan la generación de ideas nuevas, en pro de la adquisición del conocimiento.</Text>
                    </Stack>            
                </Box>
            </Box>                      
        </Center>
 
    );
}