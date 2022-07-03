import {
    Input,
    Select,
    Button,
    InputRightElement,
    FormHelperText,
    FormErrorMessage,
    FormControl,
    InputGroup,
    Stack,
    color
} from "@chakra-ui/react";

import { useState, useRef } from "react";
import { HiUser,HiPhone,HiOutlineMail,HiChevronDown} from "react-icons/hi";
import style from './style.module.css';
import emailjs from '@emailjs/browser';
import ModalAndButton from "../ModalAndButton";


export default function FormContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [option, setOption] = useState('');
    const [isError, setIsError] = useState(false);

    const form = useRef();

    return (
        <div className={style.form_container}>
                <p>¡Queremos ayudarte!</p>
          
            <form
                ref={form}
                onSubmit={(e) => {
                    e.preventDefault();
                    // verifying that all form fields have values
                    if (name === '' || email === '' || phone === '' || option === '') {
                        setIsError(true);
                    } else {
                        setIsError(false);
                        // use emailjs to send email
                        emailjs.sendForm('service_g3a9b6m', 'contact_form', form.current, 'J8m3krTKjpgs-dSSU')
                            .then((result) => {
                                console.log(result.text);
                            }, (error) => {
                                console.log(error.text);
                            })
                    }
                }}
            >
                
             <Stack spacing={4}>
            <InputGroup>
                <Input 
                    isInvalid={!name && isError}
                    errorBorderColor='red.300'
                    borderRadius={'10px'}
                    h='40px'                     
                    pointerEvents='none'
                    fontSize='20px'                    
                    type='tel'
                    mb={4}
                    name='name'
                    rightic
                    placeholder='Tu nombre'
                    onChange={(e) => setName(e.target.value)}
                />
                <InputRightElement margin={3}  children={  <HiUser size={20}  color={'gray'} /> } />
              </InputGroup>  
              </Stack>
          <Stack spacing={4}>
            <InputGroup>
                <Input
                    isInvalid={!phone && isError}
                    borderRadius={'10px'}
                    h='40px'
                    fontSize='20px'
                    mb={4}
                    name='phone'
                    placeholder='Telefono'
                    onChange={(e) => setPhone(e.target.value)}
                />
                 <InputRightElement margin={3}  children={  <HiPhone size={20}  color={'gray'} /> } />
                </InputGroup>
                </Stack>
                <Stack spacing={4}>
            <InputGroup>
                <Input
                    isInvalid={!email && isError}
                    borderRadius={'10px'}
                    h='40px'
                    fontSize='20px'
                    mb={4}
                    name='email'
                    type='email'
                    placeholder='Correo electronico'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputRightElement margin={3}  children={  <HiOutlineMail size={20}  color={'gray'} /> } />
                </InputGroup>
             </Stack>
                <Select
                    className={style.SelectContainer}
                    isInvalid={!option && isError}
                    borderRadius={'10px'}
                    h='40px'
                    fontSize='20px'
                    mb={4}
                    icon={<HiChevronDown />}           
                    name='options'
                    placeholder='Programa interesado'
                    color={'gray.300'}
                    onChange={(e) => setOption(e.target.value)}
                >
                    <option >Preescolar</option>
                    <option>Primaria</option>
                    <option>Bachillerato</option>
                    <option>Adultos</option>
                </Select>
          
                {isError ? <span className={style.errorMessage}>Todos los campos son obligatorios</span>: null}
                <ModalAndButton isError={isError} />
         
            </form>
        </div>
    );
}