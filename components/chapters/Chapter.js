import styles from './Chapter.module.scss';

function Chapter({title, MyContent}) {
    return <main className={styles.fullContent}>
        <section>
            <h1 className={styles.title}>{title}</h1>
            <MyContent className={styles.content}/>
        </section>
    </main>
};

export default Chapter;