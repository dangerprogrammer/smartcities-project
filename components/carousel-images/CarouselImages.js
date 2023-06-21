function CarouselImages({listImages}) {
    if (!listImages || !listImages.length) return;

    return <ul>
        {listImages.map((src, ind) => <li key={ind}></li>)}
    </ul>
};

export default CarouselImages;