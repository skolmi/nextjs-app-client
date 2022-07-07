import Layout from "../components/layout";
import { useState } from "react";
import { Box, Input, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import PaymentForm from '../components/PaymentForm'

export default function payments() {

    return (
        <Layout>
            <Box display='flex' justifyContent='center'>
                <Text textAlign='center'>
                    En Skolmi tenemos dos opciones para que realices tus pagos <br />
                    PAGOS EN LÍNEA <br />
                    <Link href="http://www.zonapagos.com/t_skolmi" isExternal color='teal.500'>
                        http://www.zonapagos.com/t_skolmi <ExternalLinkIcon mx='2px' />
                    </Link>
                    <br />
                    El pago se realizará utilizando los servicios de PSE, realizando el débito desde tu cuenta corriente o de ahorros.<br />
                    BANCO DAVIVIENDA<br />
                    Cuenta de ahorros No.  046400212539   a nombre de SKOLMI.<br />
                    Debes realizar la consignación ó transferencia.<br />
                    Recuerda que para cualquiera de los dos casos es importante enviar el soporte del pago al correo admisiones@skolmi.com<br />
                </Text>
            </Box>
        </Layout>
    );
}