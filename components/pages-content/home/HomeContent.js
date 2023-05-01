import PageContainer from '@/components/page-container/PageContainer';
import styles from './HomeContent.module.scss';
import {randomInt, random, between} from '@/scripts/global-scripts';
import BackgroundContent from '@/components/background-content/BackgroundContent';
import PageContent from '@/components/page-content/PageContent';
import ListImages from '@/components/list-images/ListImages';
import TextSwitcher from '@/components/text-switcher/TextSwitcher';

function HomeContent() {
  const listMembers = [
    {src: "/imgs/patrick.jpg", name: "Patrick Léo", aditionalLinks: [
      {Img() {
        return <ion-icon name="logo-github"></ion-icon>
      }, src: "https://github.com/dangerprogrammer", name: "GitHub"}
    ]},
    {src: "/imgs/renato.jpg", name: "Renato Rinaldi"},
    {src: "/imgs/luis.jpg", name: "Luis Henrique"},
    {src: "/imgs/viktor.jpg", name: "Viktor Nachiluk Roza"}
  ], switchedText = ['inteligentes', 'humanas', 'sustentáveis'];

  setTimeout(animateItemsLoader, 1);

  return <PageContainer id="home-page">
    <PageContent className={styles.contentPage} outsideSize={<canvas className={styles.canvasElement} id="home-background"></canvas>}>
      {/* <div className={`${styles.homeImage} logo-website`}></div> */}
      <div>
        <h1 className={styles.pageTitle}>Um projeto sobre
          <br/>
          cidades
          <br/>
          {/* <TextSwitcher switchedText={switchedText} infiniteSwitch/> */}
        </h1>
      </div>
      <BackgroundContent className={styles.homeBackground}/>
    </PageContent>
    <PageContent className={styles.groupCollaborators} outsideSize={<>
      <div>
        <svg id="wave" className={styles.waveBackground} viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
          <path d="M0 1007L45.7 1006.7C91.3 1006.3 182.7 1005.7 274.2 1011.3C365.7 1017 457.3 1029 548.8 1035.7C640.3 1042.3 731.7 1043.7 823 1042.2C914.3 1040.7 1005.7 1036.3 1097 1029.2C1188.3 1022 1279.7 1012 1371.2 1009.8C1462.7 1007.7 1554.3 1013.3 1645.8 1021.3C1737.3 1029.3 1828.7 1039.7 1874.3 1044.8L1920 1050L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z" fill="#25f" strokeLinecap="round" strokeLinejoin="miter"></path>
          <path d="M0 1000L45.7 1002.7C91.3 1005.3 182.7 1010.7 274.2 998C365.7 985.3 457.3 954.7 548.8 949C640.3 943.3 731.7 962.7 823 966.7C914.3 970.7 1005.7 959.3 1097 963.8C1188.3 968.3 1279.7 988.7 1371.2 991.2C1462.7 993.7 1554.3 978.3 1645.8 977.8C1737.3 977.3 1828.7 991.7 1874.3 998.8L1920 1006L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z" fill="#25f5" strokeLinecap="round" strokeLinejoin="miter"></path>
          <path d="M0 1044L40 1042.2C80 1040.3 160 1036.7 240 1037C320 1037.3 400 1041.7 480 1035.7C560 1029.7 640 1013.3 720 1005.3C800 997.3 880 997.7 960 1003.5C1040 1009.3 1120 1020.7 1200 1029C1280 1037.3 1360 1042.7 1440 1038.5C1520 1034.3 1600 1020.7 1680 1012.3C1760 1004 1840 1001 1880 999.5L1920 998L1920 1081L1880 1081C1840 1081 1760 1081 1680 1081C1600 1081 1520 1081 1440 1081C1360 1081 1280 1081 1200 1081C1120 1081 1040 1081 960 1081C880 1081 800 1081 720 1081C640 1081 560 1081 480 1081C400 1081 320 1081 240 1081C160 1081 80 1081 40 1081L0 1081Z" fill="#25f8" strokeLinecap="round" strokeLinejoin="miter"></path>
        </svg>
      </div>
      <div>
      <svg id="blob" className={styles.blobBackground} viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(978.2717637396963 600.957543938299)"><path d="M292.5 -303.3C370.5 -214.5 419.2 -107.2 429.3 10C439.3 127.3 410.6 254.6 332.6 310.8C254.6 367.1 127.3 352.3 13.7 338.6C-99.9 324.9 -199.9 312.4 -288 256.1C-376.2 199.9 -452.6 99.9 -465.7 -13.1C-478.8 -126.1 -428.5 -252.2 -340.4 -341C-252.2 -429.9 -126.1 -481.4 -9.4 -472C107.2 -462.6 214.5 -392.2 292.5 -303.3" fill="#46f"></path></g></svg>
      </div>
    </>
    }>
      <h1 className={styles.titleMembers}>Aqui estão alguns colaboradores do projeto!</h1>
      <ListImages dataList={listMembers} borderColor="white" shadow shadowColor="#1114" style={{zIndex: 1}}/>
    </PageContent>
  </PageContainer>
};

function animateItemsLoader() {
  const canvas = document.querySelector('#home-background'), canvas2d = canvas.getContext('2d'), polygons = [];

  let hasRender = !1;

  function updateCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    hasRender ? updatePolygons() : generatePolygons(25);

    requestAnimationFrame(updateCanvas);
    hasRender = !0;
  };

  requestAnimationFrame(updateCanvas);

  const moveSpeed = 1;
  let lastX, lastY;

  document.addEventListener("mousemove", movePolygonMouse);

  function movePolygonMouse({clientX, clientY}) {
    if (lastX !== undefined && lastY !== undefined) {
      if (lastX != clientX || lastY != clientY) {
        polygons.forEach((polygon) => {
          polygon.x  += between(-20, clientX - lastX, 20) * (moveSpeed / polygon.size * 2);
          polygon.y  += between(-20, clientY - lastY, 20) * (moveSpeed / polygon.size);
        });
      };
    };

    lastX = clientX;
    lastY = clientY;
  };

  function updatePolygons() {
    canvas2d.lineWidth = 3;
    canvas2d.globalAlpha = .4;

    window.polygons = polygons;

    polygons.forEach(({size, x, y, color, speedY}, ind) => {
      canvas2d.save();

      const h = canvas.height, w = canvas.width, centerY = h / 2, centerX = w / 2;

      polygons[ind].y = y + speedY;
      y = polygons[ind].y;

      const proximityFrom = potency => potency - (Math.abs(x - centerX) + Math.abs(y - centerY)) / ((centerX + centerY) / potency),
        fromColorTo = (longest, nearest, log) => {
          const longestStr = `rgb(${longest.red},${longest.green},${longest.blue})`, nearestStr = `rgb(${nearest.red},${nearest.green},${nearest.blue})`;
          let red = nearest.red - longest.red, green = nearest.green - longest.green, blue = nearest.blue - longest.blue, finalStr = 'rgb(';
          red = Math.max(red, 0);green = Math.max(green, 0);blue = Math.max(blue, 0);
          red = proximityFrom(red);green = proximityFrom(green);blue = proximityFrom(blue);
          red += longest.red;green += longest.green;blue += longest.blue;
          red = Math.round(red);green = Math.round(green);blue = Math.round(blue);
          finalStr += `${red},`;finalStr += `${green},`;finalStr += `${blue}`;
          finalStr += ')';
          if (log) {
            console.group('Teste');
            console.log('%c ', `background-color: ${finalStr}`, `color: ${finalStr}`);
            console.log('%c ', `background-color: ${longestStr}`, `longest: ${longestStr}`);
            console.log('%c ', `background-color: ${nearestStr}`, `nearest: ${nearestStr}`);
            console.groupEnd();
          };
          return finalStr;
        };

      const startColor = {red: 34, green: 85, blue: 255}, finalColor = {red: 136, green: 136, blue: 136}, strokeColor = fromColorTo(startColor, finalColor, ind == 0);

      if (ind == 0) {
        canvas2d.strokeStyle = 'red';
        window.fromColorTo = fromColorTo;
      } else canvas2d.strokeStyle = strokeColor;

      const fullyX = (side) => x + size * Math.cos(2 * Math.PI * (side / 6 + 1 / 12)),
        fullyY = (side) => y + size * Math.sin(2 * Math.PI * (side / 6 + 1 / 12));

      let side = 0;

      canvas2d.beginPath();
      canvas2d.moveTo(fullyX(side), fullyY(side));

      for (side = 1; side <= 6; side++) {
        canvas2d.lineTo(fullyX(side), fullyY(side));
        if (side % 2) {
          canvas2d.lineTo(x, y);
          canvas2d.lineTo(fullyX(side), fullyY(side));
        }
      };

      canvas2d.closePath();
      canvas2d.stroke();
      canvas2d.restore();

      if (y < 0 - size) {
        polygons.splice(ind, 1);

        const size = random(30, 60);

        buildPolygon({size, y: canvas.height + size});
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
    props.color ??= '#888';
    props.speedY = props.size ** -1 * -8;

    const {size, x, y, color, speedY} = props;

    polygons.push({size, x, y, color, speedY});
  };
};

export default HomeContent;