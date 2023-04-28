import PageContainer from '@/components/pagecontainer/PageContainer';
import styles from './HomeContent.module.scss';
import globalStyles from '@/styles/globals.module.scss';
import Image from 'next/image';
import {randomInt, random, between} from '@/scripts/global-scripts';

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
    canvas2d.lineWidth = 6;
    canvas2d.globalAlpha = .5;

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
    props.speedY = (props.size ** -1) * -3e1;

    const {size, x, y, color, speedY} = props;

    polygons.push({size, x, y, color, speedY});
  };
};

export default HomeContent;