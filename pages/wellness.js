import Layout from "../components/layout";
import Head from "next/head";
import style from './wellness.module.css';
import Image from "next/image";

import image_wellness_1 from '../assets/image_wellness.png';
import image_wellness_2 from '../assets/image_wellness_2.png';

import { Box, Text } from "@chakra-ui/react";


export default function Wellness() {
    return (
        <>
            <Head>
                <title>Skolmi</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <section>
                    <div>
                        <Image src={image_wellness_2}/>
                    </div>
                </section>
                <Box bg='tomato'>
                    <Text>
                        titulo
                    </Text>
                </Box>
                <section className={style.carousel_container}>

                </section>
                <div className={style.title_container}>

                </div>
                <div className={style.text_container}>
                    <p>Es una experiencia educativa innovadora, significativa y transformadora, que desde lo digital electrónico potencia la comunicación y el aprendizaje. Involucra activamente al estudiante en la resolución de situaciones problémicas.</p>
                </div>
                <div className={style.img_container}>
                    <Image src={image_wellness_1} />
                </div>
                <div className={style.grid_container}>

                </div>
            </Layout>

        </>
    );
}