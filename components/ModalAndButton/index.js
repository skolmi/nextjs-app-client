import React, { useState } from "react";
import style from './style.module.css';
import { 
    Box,
    Button,
    Text  
} from "@chakra-ui/react";


import { FcOk } from 'react-icons/fc'

export default function ModalAndButton(props) {
    const [showModal, setShowModal] = useState(false);
    const isError = props.isError;
    return (
        <div>
            <Button
                onClick={() => setShowModal(true)}
                type="submit"
                mt={10}
                width="100%"
                bg='#00194A'
                color='white'
                fontSize='20px'
                padding={'20px'}
                _hover={'#00194A'}
            >
                ¡ Listo !
            </Button>

            {showModal && !isError ? (
                <div className={`${style.modal}`}>
                    <Box width='100%'>
                        <FcOk/>
                    </Box>
                </div>
            ) : null}
        </div>

    );
}