import Link from 'next/link';
import styles from './ListImages.module.scss';
import globalStyles from '@/styles/globals.module.scss';

function ListImages({dataList, className = "", circleSize = "10rem", borderColor = "red", shadowColor, shadow, reverseInd, bgColor, gapSize = "-2em", ...contentArgs}) {
    return <ul className={`${styles.imagesContainer} ${className}`} {...contentArgs}>
        {dataList.map(({src, name, aditionalLinks}, ind) => <li key={ind} className={`${styles.imageContainer} ${globalStyles.hoverElem}`} style={{translate: `calc(${gapSize} * ${ind - dataList.length / 2 + .5})`, backgroundColor: borderColor, boxShadow: shadow && `${shadowColor || borderColor} 0 calc(${circleSize} / 8) calc(${circleSize} / 3)`, "--text": name, "--size": circleSize, "--color": bgColor || "red", "--ind": reverseInd ? dataList.length - ind : ind}}>
            <span className={styles.imageContent}>
                <img alt={name} src={src}/>
            </span>
            <div className={styles.imageDesc} style={{boxShadow: shadow && `${shadowColor || borderColor} 0 calc(${circleSize} / 10) calc(${circleSize} / 2)`}}>
                <span>{name}</span>
                {aditionalLinks && <>
                    <hr/>
                    {aditionalLinks.map(({src, name, Img}, ind) => <Link className={styles.aditionalLink} key={ind} href={src} target="_blank">
                        <Img />
                        <span>{name}</span>
                    </Link>)}
                </>}
            </div>
        </li>)}
    </ul>
};

export default ListImages;