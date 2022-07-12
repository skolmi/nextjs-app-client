import Layout from "../components/layout";
import { useRef, useState } from "react";
import { Box, Button, Input, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import PaymentForm from '../components/PaymentForm'
import style from './payments.module.css';
import banner_modal from '../assets/banner_skolmi_title.PNG';
import Image from "next/image";

export default function payments() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);


    const [showModal, setShowModal] = useState(false);

    const form = useRef();



    return (
        <Layout>
            <Box display='flex' justifyContent='center'>
                <Box
                    backgroundColor='white'
                    color='black'
                    padding='20px'
                    borderRadius='10px'
                    width='500px'
                >
                    <Text textAlign='center' fontSize='3xl'>
                        En Skolmi te ofrecemos varias opciones para realizar tus pagos <br />
                        PAGO PSE, TARJETA DE CREDITO, PRODUCTOS DAVIVIENDA Y DAVIPLATA <br />
                        Por favor llena el siguiente formulario con los datos del estudiante <br />
                    </Text>
                    <form
                        ref={form}
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (name === '' || email === '' || phone === '' || lastName === '' || value === ''){
                                setIsError(true);
                            } else {
                                setIsError(false);
                                setShowModal(true)
                            }
                        }}
                    >
                        <Input
                            isInvalid={!name && isError}
                            errorBorderColor='red.300'
                            borderRadius={'10px'}
                            h='40px' fontSize='20px'
                            mt={8}
                            mb={4}
                            name='name'
                            placeholder='Nombre del estudiante'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            isInvalid={!lastName && isError}
                            errorBorderColor='red.300'
                            borderRadius={'10px'}
                            h='40px' fontSize='20px'
                            mb={4}
                            name='lastName'
                            placeholder='Apellidos del estudiante'
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Input
                            isInvalid={!phone && isError}
                            errorBorderColor='red.300'
                            borderRadius={'10px'}
                            h='40px'
                            fontSize='20px'
                            mb={4}
                            name='phone'
                            placeholder='Telefono del estudiante'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Input
                            isInvalid={!email && isError}
                            errorBorderColor='red.300'
                            borderRadius={'10px'}
                            h='40px'
                            fontSize='20px'
                            mb={4}
                            name='email'
                            type='email'
                            placeholder='Correo electronico del estudiante'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            isInvalid={!value && isError}
                            errorBorderColor='red.300'
                            borderRadius={'10px'}
                            h='40px' fontSize='20px'
                            mb={4}
                            name='valor a pagar'
                            placeholder='Ingresa valor a pagar'
                            onChange={(e) => setValue(e.target.value)}
                        />
                        {isError ? <span className={style.errorMessage}>Todos los campos son obligatorios</span> : null}
                        <Box display='flex' justifyContent='center'>
                            <Button
                                type="submit"
                                width='20%'
                                backgroundColor='#00194A'
                                color='white'
                            >
                                Enviar
                            </Button>
                        </Box>
                    </form>
                    {showModal ? (
                        <Box className={style.modal}>
                            <Box background='white'>
                                <Box>
                                    <Box backgroundColor='#007B77'>
                                        <Image src={banner_modal} />
                                    </Box>
                                </Box>
                                <Box  width='100%'>
                                    <Text textAlign='center' fontWeight='extrabold'>
                                        Los datos del alumno suministrados son:<br />
                                        {name}<br/>
                                        {lastName}<br/>
                                        {email}<br />
                                        {phone}<br />
                                        {value}<br />
                                    </Text>
                                </Box>
                                <Box display='flex' justifyContent='center' flexDir='column' alignItems='center'>
                                    <PaymentForm
                                        value={value}
                                    />
                                    <Button
                                        onClick={() => setShowModal(false)}
                                        width='20%'
                                        backgroundColor='#00194A'
                                        color='white'
                                        marginTop='5px'
                                        marginBottom='5px'
                                    >
                                        Cancelar
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    ) : null}
                </Box>
            </Box>
        </Layout>
    );
}