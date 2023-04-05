import PageContainer from '@/components/pagecontainer/PageContainer';
import styles from './HomeContent.module.scss';
import globalStyles from '../../../styles/globals.module.scss';
import Image from 'next/image';

function HomeContent() {
    return <PageContainer id="home-page">
      <main className={`${globalStyles.contentSize} ${styles.contentPage}`}>
        <div className={`${styles.homeImage} logo-website`}></div>
        <div>
          <h1 className={styles.pageTitle}>Um projeto sobre cidades inteligentes!</h1>
        </div>
      </main>
    </PageContainer>
};

export default HomeContent;