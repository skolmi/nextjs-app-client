import Layout from "../components/layout";
import { Card } from "../components/Card";


export default function payments() {
    const data = {
        products: [
            {
                name: 'Año escolar',
                price: '250000',
                description: 'Año escolar estandar'
            },
            {
                name: 'Plan vacacional',
                price: '30000',
                description: 'el mejor plan para tus vacaiones'
            },
            {
                name: 'pruebame',
                price: '1000',
                description: 'esta es una prueba de producción real'
            }
        ]
    }

    const items = data.products.map((item) =>
            <Card
                productName={item.name}
                price={item.price}
                description={item.description}
            />
    )



    return (
        <Layout>
            <div className="d-flex justify-content-center flex-wrap">{items}</div>
        </Layout>
    );
}