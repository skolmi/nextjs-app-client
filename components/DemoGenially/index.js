import { Box, Text } from "@chakra-ui/react";
import style from './style.module.css';

export default function DemoGenially({ url, children }) {
    return (
        <Box
            position='relative'
            paddingBottom='65%'
            paddingTop='0'
            height='0'
            width={'100%'}
            justifyContent='center'
        >
            {children}
        </Box>
    );
}