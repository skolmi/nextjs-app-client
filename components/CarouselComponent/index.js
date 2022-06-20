import TestimonyCard from "../TestimonyCard";
import { Carousel } from "react-responsive-carousel";
import style from './style.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselSEction() {

    return (
        <div className={`${style.carouselContainer} `}>
            <Carousel showStatus={false}>
                <div className={style.carouselItem}>
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                </div>
                <div className={style.carouselItem}>
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                </div>
                <div className={style.carouselItem}>
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                </div>
            </Carousel>
        </div>
    );
}