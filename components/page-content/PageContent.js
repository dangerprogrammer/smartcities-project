import styles from './PageContent.module.scss';
import globalStyles from '@/styles/globals.module.scss';

function PageContent({children, outsideSize, className, ...argsContainer}) {
    return <main className={styles.pageContent}>
        <div className={`${globalStyles.contentSize} ${globalStyles.heightFull} ${className}`} {...argsContainer}>
            {children}
        </div>
        {outsideSize}
    </main>
};

export default PageContent;