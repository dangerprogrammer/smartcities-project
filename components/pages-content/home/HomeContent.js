import PageContainer from '@/components/pagecontainer/PageContainer';
import styles from './HomeContent.module.scss';
import globalStyles from '@/styles/globals.module.scss';
import Image from 'next/image';
import {randomInt, between} from '@/scripts/global-scripts';

function HomeContent() {
  setTimeout(animateItemsLoader, 1);

  return <PageContainer id="home-page">
    <main className={`${globalStyles.contentSize} ${styles.contentPage}`}>
      <div className={`${styles.homeImage} logo-website`}></div>
      <div>
        <h1 className={styles.pageTitle}>Um projeto sobre cidades inteligentes!</h1>
      </div>
      <canvas className={styles.canvasElement} id="home-background"></canvas>
    </main>
  </PageContainer>
};

function animateItemsLoader() {
  const canvas = document.querySelector('#home-background'), canvas2d = canvas.getContext('2d'), polygons = [];

  let hasRender = !1;

  function updateCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    hasRender ? updatePolygonPos() : generatePolygons(20);

    requestAnimationFrame(updateCanvas);
    hasRender = !0;
  };

  requestAnimationFrame(updateCanvas);

  function updatePolygonPos() {

  };

  function generatePolygons(count = 12) {
    polygons.splice(0, polygons.length);

    for (let c = 0; c < between(5, count, 50); c++) buildPolygon();
  };

  function buildPolygon() {
    const polygonSize = randomInt(30, 60);

    polygons.push({polygonSize});
  };
};

export default HomeContent;