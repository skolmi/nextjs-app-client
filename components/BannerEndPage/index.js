import Image from "next/image";
import bannerImage from "../../assets/Banner-Home-End.png"
import style from './style.module.css'

export default function BannerEndPage() {
    return (
        <div className={style.BannerEndPage}>
            <Image src={bannerImage} alt="Banner End Page" />
        </div>
    );
}