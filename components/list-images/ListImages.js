import styles from './ListImages.module.scss';
import globalStyles from '@/styles/globals.module.scss';

function ListImages({dataList, className, circleSize = "10rem", borderColor = "red", shadow, reverseInd, bgColor, gapSize = "-2em"}) {
    return <ul className={`${styles.imagesContainer} ${className}`}>
        {dataList.map(({src, name}, ind) => <li key={ind} className={`${styles.imageContainer} ${globalStyles.hoverElem}`} style={{translate: `calc(${gapSize} * ${ind - dataList.length / 2 + .5})`, backgroundColor: borderColor, boxShadow: shadow && `${borderColor} 0 calc(${circleSize} / 8) calc(${circleSize} / 3)`, "--text": name, "--size": circleSize, "--color": bgColor || "red", "--ind": reverseInd ? dataList.length - ind : ind}}>
            <span>
                <img alt={name} src={src}/>
            </span>
            <div className={styles.imageDesc}>{name}</div>
        </li>)}
    </ul>
};

export default ListImages;