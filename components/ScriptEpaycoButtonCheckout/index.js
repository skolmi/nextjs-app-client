import Script from "next/script";

export default function ScriptEpaycoButtonCheckout () {
    return (
        <Script
            src="https://checkout.epayco.co/checkout.js"
            type="text/javascript"
        />
    );
}