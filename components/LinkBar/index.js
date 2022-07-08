import style from "./LinkBar.module.css";
import platformAccessButton from '../../assets/boton_acceso_plataforma.svg'
import Image from "next/image";
import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

import contactoImg from '../../assets/Contacto.png';

import iconwhatsapp from '../../assets/Icon_Whatsapp.svg';
import iconEmail from '../../assets/Icon_Email.svg';
import iconContacto from '../../assets/Icon_Contacto.svg';

import iconPlataforma from '../../assets/Icono_Acceso_Plataforma.svg';


export default function LinkBar() {
    const [showModal, setShowModal] = useState(false);
    return (
        <React.Fragment>
            <nav className={style.linkBar}>
                <div className={style.buttonContainer}>
                        <a href="https://miplataformaeducativa.skolmi.com/login/index.php">
                            <Box display='flex' padding='5px' alignItems='center'>
                                <Box padding='5px'>
                                    <Image src={iconPlataforma} alt="Acceso a Plataforma" />
                                </Box>
                                <Text>
                                    Acceso<br/> a la plataforma
                                </Text>
                            </Box>
                        </a>
                </div>
                <form>
                    <ul>
                        <li>
                            <a href="/payments">Pagos</a>
                        </li>
                        {/* <li>
                        <a href="#">Escuela de padres</a>
                    </li> */}
                        <li>
                            <a
                                href="#"
                                onClick={() => setShowModal(true)}
                            >
                                contacto
                            </a>
                        </li>
                        {/* <li>
                        <a href="#">PQR</a>
                    </li> */}
                    </ul>
                </form>
            </nav>
            {showModal ? (
                <div className={style.modal}>
                    <Box padding='20%'>
                        <Box backgroundColor='#007B77'>
                            <Image src={contactoImg}/>
                        </Box>
                        <Box background='white' padding='10%'>
                            <Box display='flex' justifyContent='center'>
                                <Box maxW='50px' margin='10px'>
                                    <Image src={iconwhatsapp} />
                                </Box>
                                <Text className={style.text}>
                                    (+57) 302 388 1611
                                </Text>
                            </Box>
                            <Box display='flex' justifyContent='center'>
                                <Box maxW='50px' margin='10px'>
                                    <Image src={iconContacto} />
                                </Box>
                                <Text className={style.text}>
                                    (+57) 601 514 2585
                                </Text>
                            </Box>
                            <Box display='flex' justifyContent='center'>
                                <Box maxW='50px' margin='10px'>
                                    <Image src={iconEmail} />
                                </Box>
                                <Text className={style.text}>
                                    info@skolmi.com
                                </Text>
                            </Box>
                            <Box display='flex' justifyContent='center'>
                                <Button
                                onClick={() => setShowModal(false)}
                                width='20%'
                                backgroundColor='#00194A'
                                color='white'
                                >
                                    Cerrar
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                </div>
            ) : null}
        </React.Fragment>

    );
}