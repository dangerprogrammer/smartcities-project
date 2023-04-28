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

    hasRender ? updatePolygons() : generatePolygons(20);

    requestAnimationFrame(updateCanvas);
    hasRender = !0;
  };

  requestAnimationFrame(updateCanvas);

  function updatePolygons() {
    /*
        canvas2d.lineWidth = 8;
        canvas2d.globalAlpha = window.theme === 'dark' ? 1 : .5;
        polygons.forEach(({xCenter, yCenter, numberSides, polygonSize, fullyColor, randomBW, randomBH, rotationSpeed, rotate, rotationDir}, ind) => {
            canvas2d.save();
            polygons[ind].rotate = rotate + rotationSpeed || rotationSpeed;
            rotate = polygons[ind].rotate;
            xCenter = xCenter > 30 ? (80/100*bW) + randomBW * (15/100*bW) : (5/100*bW) + randomBW * (20/100*bW);xCenter = Math.min(bW - polygonSize, Math.max(polygonSize, xCenter));
            yCenter = yCenter > 18 ? (80/100*bH) + randomBH * (15/100*bH) : (5/100*bH) + randomBH * (20/100*bH);yCenter = Math.min(bH - polygonSize, Math.max(polygonSize, yCenter));

            canvas2d.beginPath();
            canvas2d.moveTo(
                xCenter + polygonSize * Math.cos(2 * Math.PI * (0 + rotate * rotationDir)),
                yCenter + polygonSize * Math.sin(2 * Math.PI * (0 + rotate * rotationDir))
            );
    
            canvas2d.strokeStyle = fullyColor;
    
            for (let c = 1; c <= numberSides; c++) canvas2d.lineTo(
                xCenter + polygonSize * Math.cos(2 * Math.PI * (c / numberSides + rotate * rotationDir)),
                yCenter + polygonSize * Math.sin(2 * Math.PI * (c / numberSides + rotate * rotationDir))
            );
    
    
            canvas2d.closePath();
            canvas2d.stroke();
            canvas2d.restore();
        });
    */
    canvas2d.lineWidth = 8;
    polygons.forEach(({size, x, y, color}, ind) => {
      canvas2d.save();

      canvas2d.closePath();
      canvas2d.stroke();
      canvas2d.restore();
    });
  };

  function generatePolygons(count = 12) {
    polygons.splice(0, polygons.length);

    for (let c = 0; c < between(5, count, 50); c++) buildPolygon();
  };

  function buildPolygon() {
    const h = canvas.height, w = canvas.width, size = randomInt(30, 60),
    x = randomInt(size, w - size), y = randomInt(size, h - size), color = '#50f';

    polygons.push({size, x, y, color});
  };
};

export default HomeContent;