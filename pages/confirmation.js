import Layout from "../components/layout";
import checkImg from '../assets/checkImg.png';
import Image from "next/image";
import { Box, Button, Text } from "@chakra-ui/react";

export default function confirmation() {
    return (
        <Layout>
            <Box display='flex' alignItems={'center'} flexDirection={'column'}>
                <Box maxWidth={'400px'}>
                    <Image src={checkImg} alt="check" />
                </Box>
                <Box>
                    <Text
                        color={"#007B77"}
                        textAlign={"center"}
                        fontSize={'6xl'}
                        fontWeight={'900'}
                    >
                        ¡Gracias por contactarnos!
                    </Text>
                    <Text
                        color={"#007B77"}
                        textAlign={"center"}
                        fontSize={'4xl'}
                        fontWeight={'900'}
                    >
                        Hemos recibido tu mensaje y nos comunicaremos contigo a la brevedad.
                    </Text>
                </Box>
                <Button
                        onClick={() => window.location.href = "/"}
                        mt={5}
                        mb={5}
                        width="320px"
                        bg='#00194A'
                        color='white'
                        fontSize='20px'
                        padding={'20px'}
                        _hover={'#00194A'}
                    >
                        Regresar
                    </Button>
            </Box>
        </Layout>
    );
}