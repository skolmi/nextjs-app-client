import {
    FormControl,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";


export default function FormContact() {
    return (
        <div className="container">
            <FormControl>
                <FormLabel htmlFor='name'>Tu nombre</FormLabel>
                <Input id='name' />
                <FormLabel htmlFor='phone'>Telefono</FormLabel>
                <Input id='phone' />
                <FormLabel htmlFor='email'>Correo electronico</FormLabel>
                <Input id='phone' type='email' />
                <FormLabel htmlFor='options'>Programa interesado</FormLabel>
                <Select id='options' placeholder='Programa interesado'>
                    <option>Preescolar</option>
                    <option>Primaria</option>
                    <option>Bachillerato</option>
                    <option>Adultos</option>
                </Select>
            </FormControl>
        </div>
    );
}