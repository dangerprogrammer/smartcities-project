import PageContainer from '@/components/page-container/PageContainer';
import styles from './GameProject.module.scss';
import PageContent from '@/components/page-content/PageContent';
import Link from 'next/link';
import CarouselImages from '@/components/carousel-images/CarouselImages';

function GameProject() {
    const images = ["/imgs/game-1.jpg", "/imgs/game-2.jpg", "/imgs/game-3.jpg", "/imgs/game-4.jpg"];

    return <PageContainer id="game-page">
        <PageContent className={styles.gameChapter}>
            <p>As imagens que podem ser vistas abaixo ilustram uma demonstração de um conceito inicial de jogo que possa, juntamente ao site, corroborar e potencializar os futuros projetos de UPx . O jogo tem como ideia central no escopo das lâmpadas inteligentes de dar suporte, de uma forma mais lúdica, dos motivos é potencialidades do projeto, principalmente para um público infantil que ainda está desenvolvendo o pensamento sustentável. Para a criação foi feito um mundo “aberto” que faz uma alusão ao nosso mundo em um cenário pós apocalíptico e repleto de instabilidades e cabe ao jogador explorar este mundo e descobrir o que trouxe tal mundo a ruína.</p>
        </PageContent>
        <PageContent className={styles.gameChapter}>
            <h1>Aqui estão algumas imagens do jogo que está sendo desenvolvido</h1>
            <CarouselImages listImages={images}/>
        </PageContent>
        <Link className={styles.playButton} href="/">Jogar Agora!</Link>
    </PageContainer>
};

export default GameProject;