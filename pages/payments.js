import Layout from "../components/layout";
import ScriptEpaycoButtonCheckout from "../components/ScriptEpaycoButtonCheckout";
import Script from "next/script";

export default function payments() {
    // var ePayco = {
    //     name: "Vestido Mujer Primavera",
    //     description: "Vestido Mujer Primavera",
    //     invoice: "1234",
    //     currency: "cop",
    //     amount: "12000",
    //     tax_base: "0",
    //     tax: "0",
    //     country: "co",
    //     lang: "en",
    //     external: "false"
    // }
    // var handler = ePayco.checkout.configure({
    //     key:"e2a4be24af5151166c2d45c1fcb1214c",
    //     test:true
    // });

    return (
        <Layout>
            <form>
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
            </form>
            <button type="button">Oprimeme</button>
            <ScriptEpaycoButtonCheckout />
        </Layout>
    );
}