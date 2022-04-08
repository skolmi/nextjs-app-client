import Layout from "../components/layout";
import ScriptEpaycoButtonCheckout from "../components/ScriptEpaycoButtonCheckout";

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
            <button type="button">Oprimeme</button>
            <ScriptEpaycoButtonCheckout/>
        </Layout>
    );
}