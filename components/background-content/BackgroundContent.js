import styles from './BackgroundContent.module.scss';

function BackgroundContent({className}) {
    return <aside className={`${styles.backgroundContent} ${className}`}></aside>
};

export default BackgroundContent;