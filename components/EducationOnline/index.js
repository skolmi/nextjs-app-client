import style from './Education.module.css';
import Preescolar from './../../assets/Preescolar.png';
import Primaria from './../../assets/Primaria.png';
import Bachillerato from './../../assets/Bachillerato.png';
import Adultos from './../../assets/Adultos.png';
import Image from 'next/image';
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
<Center py={6} >
            <Box
                margin={'10px'}
                maxW={'250px'}                        
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}                
            >
                <Image src={Preescolar}   alt='footer'></Image>            
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead} color={'#6639A5'}> Preescolar </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>“¡Una primera experiencia es muy importante! Asegurate que tus hijos tengan una buena experiencia estudiando en Skolmi.</Text>
                    </Stack>
                    <Stack  align={'center'}>
                      <Button  background={'#00194A'} textColor={'#FFFFFF'} fontSize={'15px'} fontFamily={'Poppins'} width={'166px'}>Conoce Más</Button>
                    </Stack>
                </Box>
            </Box>
            <Box
                margin={'10px'}
                maxW={'250px'}            
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}                
            >
                <Image src={Primaria}   alt='footer'></Image>            
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead} color={'#007B77'} > Primaria </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Metodología afectiva para que tus se diviertan mientras aprenden.
¡Estudiar no debe ser aburrido!</Text>
<Text> <br></br></Text>
                    </Stack>
                    <Stack  align={'center'}>
                      <Button  background={'#00194A'} textColor={'#FFFFFF'} fontSize={'15px'} fontFamily={'Poppins'} width={'166px'}>Conoce Más</Button>
                    </Stack>
                </Box>
            </Box>
            <Box
                margin={'10px'}
                maxW={'250px'}            
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}                
            >
                <Image src={Bachillerato}   alt='footer'></Image>            
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead} color={'#00194A'} > Bachillerato </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>Brindamos una educación inclusiva y afectiva con un toque de flexibilidad, ¡Disfruta de tu bachillerato en Skolmi!</Text>
                    </Stack>
                    <Stack  align={'center'}>
                      <Button  background={'#00194A'} textColor={'#FFFFFF'} fontSize={'15px'} fontFamily={'Poppins'} width={'166px'}>Conoce Más</Button>
                    </Stack>
                </Box>
            </Box>
            <Box
                margin={'10px'}
                maxW={'250px'}            
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                borderRadius={'lg'}                
            >
                <Image src={Adultos}   alt='footer'></Image>            
                <Box p={6} >
                    <Stack spacing={0} align={'center'} mb={5}>
                    <Heading className={style.textHead} color={'#FF8C00'} > Adultos </Heading>
                    </Stack>

                    <Stack spacing={0} align={'center'} m={5} >
                        <Text className={style.text}>“¡Una primera experiencia es muy importante! Asegurate que tus hijos tengan una buena experiencia estudiando en Skolmi.</Text>
                    </Stack>
                    <Stack  align={'center'}>
                      <Button  background={'#00194A'} textColor={'#FFFFFF'} fontSize={'15px'} fontFamily={'Poppins'} width={'166px'}>Conoce Más</Button>
                    </Stack>
                </Box>
            </Box>
            
            
        </Center>
    );
}