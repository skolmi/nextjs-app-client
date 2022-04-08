import Script from "next/script";

export default function ButtonEpayco () {
    return (
        <Script
            src="https://checkout.epayco.co/checkout.js"
            class="epayco-button"
            data-epayco-key="e2a4be24af5151166c2d45c1fcb1214c"
            data-epayco-amount="50000"
            data-epayco-name="Vestido Mujer Primavera"
            data-epayco-description="Vestido Mujer Primavera"
            data-epayco-currency="cop"
            data-epayco-country="co"
            data-epayco-test="true"
            data-epayco-external="false"
            data-epayco-response="https://ejemplo.com/respuesta.html"
            data-epayco-confirmation="https://ejemplo.com/confirmacion"
            data-epayco-methodconfirmation="get"
        />
    );
}