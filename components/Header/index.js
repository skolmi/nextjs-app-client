import Navbar from "../Navbar";
import Head from "next/head";
import Logo from "../Logo";
import LinkBar from "../LinkBar";
import style from "./Header.module.css";

export default function Heeader() {
    return (
        <header>
            <Head>
                <title>Skolmi</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LinkBar/>
            <div className={style.header_main}>
                <div className={style.logo}>
                    <Logo/>
                </div>
                <Navbar/>
            </div>
        </header>
    );
}