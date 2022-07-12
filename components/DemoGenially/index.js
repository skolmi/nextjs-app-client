import { Box, Text } from "@chakra-ui/react";
import style from './style.module.css';

export default function DemoGenially({ url, children }) {
    return (
        <Box>
            <Box className={style.container}>
                <Text className={style.title}>Objeto Virtual de Aprendizaje (Demo)</Text>
            </Box>
            <Box className={style.containers}>
                <Text>La virtualidad es un sistema de acceso y representación de la realidad  que desde lo digital potencia nuestras habilidades, intensifica nuestras capacidades y se manifiesta a través de actos comunicativos.
                    Los objetos virtuales de aprendizaje son recursos educativos estructurados para hacer del acto de aprendizaje una experiencia significativa a través de la interacción, la inmersión y la cercanía de los contenidos.</Text>
            </Box>
            <Box width='100%'>
                <Box
                    position='relative'
                    paddingBottom='65%'
                    paddingTop='0'
                    height='0'
                    display='flex'
                    justifyContent='center'
                >
                    {children}
                </Box>
            </Box>
        </Box>


    );
}