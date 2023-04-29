import styles from './PageContent.module.scss';
import globalStyles from '@/styles/globals.module.scss';

function PageContent({children, outsideSize, ...argsContainer}) {
    return <main className={styles.pageContent}>
        <div className={globalStyles.contentSize} {...argsContainer}>
            {children}
        </div>
        {outsideSize}
    </main>
};

export default PageContent;