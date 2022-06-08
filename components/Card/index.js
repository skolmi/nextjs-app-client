import ButtonInfo from '../ButtonInfo';

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

export default function Card(props) {
    var IMAGE =
        `${props.srcimage}`;
    return (
        <Center py={12}>
            <Box>
                <Image
                    src={IMAGE}
                />
            </Box>
        </Center>
    );
}