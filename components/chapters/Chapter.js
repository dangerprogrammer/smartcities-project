import styles from './Chapter.module.scss';

function Chapter({title, MyContent}) {
    return <main className={styles.fullContent}>
        <h1 className={styles.title}>{title}</h1>
        <MyContent className={styles.content}/>
    </main>
};

export default Chapter;