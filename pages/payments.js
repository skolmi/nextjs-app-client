import Layout from "../components/layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function payments() {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const config = {
            method: "get",
            url: "http://localhost:8080/api/v1/products",
        }
        var response = await axios(config);
        // iterate over the data and create a new array of products
        const products = response.data.body.map(product => (
            <div>
                <Card
                    productName={product.name}
                    description={product.description}
                />
            </div>
        ))
        setProducts(products);
    }, [])

    return (
        <Layout>
            <div>{products}</div>
        </Layout>
    );
}