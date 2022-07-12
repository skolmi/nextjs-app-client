import React from "react";

export default function PaymentForm({value}) {
    const paymentForm = React.useRef(null);
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src="https://checkout.epayco.co/checkout.js"
        script.setAttribute('class',"epayco-button")
        script.setAttribute('data-epayco-key',"e2a4be24af5151166c2d45c1fcb1214c")
        script.setAttribute('data-epayco-amount',`${value||"1000"}`)
        script.setAttribute('data-epayco-name',`${"Skolmi SAS"}`)
        script.setAttribute('data-epayco-description',`${"Skolmi SAS"}`)
        script.setAttribute('data-epayco-currency','cop')
        script.setAttribute('data-epayco-country','co')
        script.setAttribute('data-epayco-test',"false")
        script.setAttribute('data-epayco-external',"false")
        script.setAttribute('data-epayco-response',"https://ejemplo.com/respuesta.html")
        script.setAttribute('data-epayco-confirmation',"https://ejemplo.com/confirmacion")
        script.setAttribute('data-epayco-methodconfirmation',"get")
        console.log(paymentForm.current)
        paymentForm.current.appendChild(script)
    }, [value]);

    return (
            <form action="https://www.skolmi.com/" method="POST" ref={paymentForm}></form>
    )};