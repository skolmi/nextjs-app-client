import imagewellnes from './../../assets/image_wellness.png';
import style from "./AulasInteractivas.module.css";
import Image from "next/image";
import {
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

export default function AulasVirtuales() {

    return (
        <>
            <Box className={style.container}>
                <Text className={style.title}>Objeto Virtual de Aprendizaje (Demo)</Text>
            </Box>

            <Box className={style.containers}>
                <Text>La virtualidad es un sistema de acceso y representación de la realidad  que desde lo digital potencia nuestras habilidades, intensifica nuestras capacidades y se manifiesta a través de actos comunicativos.
                    Los objetos virtuales de aprendizaje son recursos educativos estructurados para hacer del acto de aprendizaje una experiencia significativa a través de la interacción, la inmersión y la cercanía de los contenidos.</Text>
            </Box>

            <Box className={style.containers}>
                <Image src={imagewellnes} ></Image>
            </Box>


        </>
    );

}