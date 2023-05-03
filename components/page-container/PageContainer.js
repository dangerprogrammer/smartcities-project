import styles from './PageContainer.module.scss';
import globalStyles from '../../styles/globals.module.scss';

function PageContainer({children, ...argsContainer}) {
    return <main className={`${styles.pageContainer} ${globalStyles.heightFull}`} {...argsContainer}>
        {children}
    </main>
};

export default PageContainer;