import styles from './Chapter.module.scss';
import globalStyles from '../../styles/globals.module.scss';

function Chapter({title, MyContent}) {
    return <main className={styles.fullContent}>
        <section className={globalStyles.contentSize}>
            <h1 className={styles.title}>{title}</h1>
            <MyContent className={styles.content}/>
        </section>
    </main>
};

export default Chapter;