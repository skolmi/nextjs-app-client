import Layout from "../components/layout";
import ButtonEpayco from "../components/ButtonEpayco";

export default function payments() {
    return (
        <ButtonEpayco/>
    );
}

payments.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}