'use client';

import { useEffect } from 'react';
import styles from './CarouselImages.module.scss';
import { between } from '@/scripts/global-scripts';

function CarouselImages({listImages}) {
    if (!listImages || !listImages.length) return;

    useEffect(setButtonScroll);

    return <main>
        <section className={styles.carouselContainer}>
            <button className={`${styles.moveCarousel} ${styles.backCarousel} ${styles.noClick}`} onClick={() => scrollCarousel(-1)}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <ul className={styles.listItems}>
                {listImages.map((src, ind) => <li key={ind} className={styles.itemCarousel}>
                    <img src={src} alt={`Imagem ilustrativa (${ind})`}/>
                </li>)}
            </ul>
            <button className={`${styles.moveCarousel} ${styles.nextCarousel} ${styles.noClick}`} onClick={() => scrollCarousel(1)}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </section>
    </main>
};

function setButtonScroll() {
    const carouselContainer = document.querySelector(`*[class*="${styles.carouselContainer}"]`),
          listItems = document.querySelector(`*[class*="${styles.listItems}"]`),
          backCarousel = document.querySelector(`*[class*="${styles.backCarousel}"]`),
          nextCarousel = document.querySelector(`*[class*="${styles.nextCarousel}"]`);

    backCarousel.classList.toggle(styles.noClick, !carouselContainer.scrollLeft);
    nextCarousel.classList.toggle(styles.noClick, !(carouselContainer.scrollLeft < listItems.offsetWidth - carouselContainer.offsetWidth));
};

function scrollCarousel(dir) {
    const carouselContainer = document.querySelector(`*[class*="${styles.carouselContainer}"]`),
          listItems = document.querySelector(`*[class*="${styles.listItems}"]`),
          backCarousel = document.querySelector(`*[class*="${styles.backCarousel}"]`),
          nextCarousel = document.querySelector(`*[class*="${styles.nextCarousel}"]`);

    let scrollLeft = carouselContainer.scrollLeft;

    scrollLeft += between(-scrollLeft, carouselContainer.offsetWidth * dir, listItems.offsetWidth - carouselContainer.offsetWidth);

    console.log(scrollLeft);

    carouselContainer.scrollTo(scrollLeft, 0);

    backCarousel.classList.toggle(styles.noClick, !scrollLeft);
    nextCarousel.classList.toggle(styles.noClick, !(scrollLeft < listItems.offsetWidth - carouselContainer.offsetWidth));
};

export default CarouselImages;