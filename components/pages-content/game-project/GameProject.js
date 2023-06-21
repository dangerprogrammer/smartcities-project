import PageContainer from '@/components/page-container/PageContainer';
import styles from './GameProject.module.scss';
import PageContent from '@/components/page-content/PageContent';
import Link from 'next/link';

function GameProject() {
    return <PageContainer id="game-page">
        <PageContent className={styles.gameChapter}>
            <h1>Aqui estão algumas imagens do jogo que está sendo desenvolvido</h1>
            <img alt="Game Image" className={styles.gameImage} src="/imgs/game-1.jpg"/>
            <p>Desc1</p>
        </PageContent>
        <PageContent className={styles.gameChapter}>
            <img alt="Game Image" className={styles.gameImage} src="/imgs/game-2.jpg"/>
            <p>Desc2</p>
        </PageContent>
        <PageContent className={styles.gameChapter}>
            <img alt="Game Image" className={styles.gameImage} src="/imgs/game-3.jpg"/>
            <p>Desc3</p>
        </PageContent>
        <PageContent className={styles.gameChapter}>
            <img alt="Game Image" className={styles.gameImage} src="/imgs/game-4.jpg"/>
            <p>Desc4</p>
        </PageContent>
        <Link className={styles.playButton} href="">Jogar Agora!</Link>
    </PageContainer>
};

export default GameProject;