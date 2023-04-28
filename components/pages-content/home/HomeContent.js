import PageContainer from '@/components/pagecontainer/PageContainer';
import styles from './HomeContent.module.scss';
import globalStyles from '@/styles/globals.module.scss';
import {randomInt, random, between} from '@/scripts/global-scripts';
import BackgroundContent from '@/components/background-content/BackgroundContent';

import Wave from '@/assets/svgs/wave-haikei.svg';

function HomeContent() {
  console.log(Wave);
  setTimeout(animateItemsLoader, 1);

  return <PageContainer id="home-page">
    <main className={`${globalStyles.contentSize} ${styles.contentPage}`}>
      <div className={`${styles.homeImage} logo-website`}></div>
      <div>
        <h1 className={styles.pageTitle}>Um projeto sobre cidades inteligentes!</h1>
      </div>
      <header>Opa!</header>
      <BackgroundContent className={styles.homeBackground}/>
      <canvas className={styles.canvasElement} id="home-background"></canvas>
      <div>
        <svg  id="wave" className={styles.waveBackground} viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 999L45.7 1002.2C91.3 1005.3 182.7 1011.7 274.2 1004.2C365.7 996.7 457.3 975.3 548.8 965.8C640.3 956.3 731.7 958.7 823 966.2C914.3 973.7 1005.7 986.3 1097 993C1188.3 999.7 1279.7 1000.3 1371.2 992.8C1462.7 985.3 1554.3 969.7 1645.8 970.5C1737.3 971.3 1828.7 988.7 1874.3 997.3L1920 1006L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z" fill="#25f" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
      </div>
    </main>
  </PageContainer>
};

function animateItemsLoader() {
  const canvas = document.querySelector('#home-background'), wave = document.querySelector('#wave'), canvas2d = canvas.getContext('2d'), polygons = [];

  console.log(wave.viewBox);

  let hasRender = !1;

  function updateCanvas() {
    wave.viewBox.baseVal.height = canvas.height = window.innerHeight;
    wave.viewBox.baseVal.width = canvas.width = window.innerWidth;

    hasRender ? updatePolygons() : generatePolygons(20);

    requestAnimationFrame(updateCanvas);
    hasRender = !0;
  };

  requestAnimationFrame(updateCanvas);

  const moveSpeed = 4e-2;
  let lastX, lastY;

  document.addEventListener("mousemove", movePolygonMouse);

  function movePolygonMouse({clientX, clientY}) {
    if (lastX !== undefined && lastY !== undefined) {
      if (lastX != clientX || lastY != clientY) {
        polygons.forEach(polygon => {
          polygon.x  += Math.min(clientX - lastX, 20) * moveSpeed;
          polygon.y  += Math.min(clientY - lastY, 20) * (moveSpeed / 2);
        });
      };
    };

    lastX = clientX;
    lastY = clientY;
  };

  function updatePolygons() {
    canvas2d.lineWidth = 3;
    canvas2d.globalAlpha = .4;

    polygons.forEach(({size, x, y, color, speedY}, ind) => {
      canvas2d.save();

      polygons[ind].y = y + speedY;
      y = polygons[ind].y;

      const fullyX = (side) => x + size * Math.cos(2 * Math.PI * (side / 6 + 1 / 12)),
        fullyY = (side) => y + size * Math.sin(2 * Math.PI * (side / 6 + 1 / 12));

      let side = 0;

      canvas2d.beginPath();
      canvas2d.moveTo(fullyX(side), fullyY(side));

      canvas2d.strokeStyle = color;

      for (side = 1; side <= 6; side++) canvas2d.lineTo(fullyX(side), fullyY(side));

      canvas2d.closePath();
      canvas2d.stroke();
      canvas2d.restore();

      if (y < 0 - size) {
        delete polygons[ind];

        buildPolygon({y: canvas.height + 60});
      };
    });
  };

  function generatePolygons(count = 12) {
    polygons.splice(0, polygons.length);

    for (let c = 0; c < between(5, count, 50); c++) buildPolygon();
  };

  function buildPolygon(props = {}) {
    const h = canvas.height, w = canvas.width;

    props.size ??= random(30, 60);
    props.x ??= randomInt(props.size, w - props.size);
    props.y ??= randomInt(props.size, h - props.size);
    props.color ??= '#25f';
    props.speedY = props.size ** -1 * -3e1;

    const {size, x, y, color, speedY} = props;

    polygons.push({size, x, y, color, speedY});
  };
};

export default HomeContent;