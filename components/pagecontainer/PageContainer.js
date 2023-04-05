import styles from './PageContainer.module.scss';

function PageContainer({children, ...argsContainer}) {
    return <main className={styles.pagecontainer} {...argsContainer}>
        {children}
    </main>
};

export default PageContainer;