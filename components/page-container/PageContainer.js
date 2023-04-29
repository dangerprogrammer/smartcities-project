import styles from './PageContainer.module.scss';

function PageContainer({children, ...argsContainer}) {
    return <main className={styles.pageContainer} {...argsContainer}>
        {children}
    </main>
};

export default PageContainer;