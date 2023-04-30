import Image from 'next/image';
import styles from './Navbar.module.scss';
import globalStyles from '../../styles/globals.module.scss';
import MsgBox from '../msgbox/MsgBox';

function Navbar({title}) {
    setTimeout(loadScroll, 1);

    const optionsTheme = [
        {
            Content: ({...args}) => <span {...args}>Padrão</span>, id: "default",
            Icon: () => <ion-icon name="desktop-outline"></ion-icon>
        }, {
            Content: ({...args}) => <span {...args}>Claro</span>, id: "light",
            Icon: () => <ion-icon name="sunny-outline"></ion-icon>
        }, {
            Content: ({...args}) => <span {...args}>Escuro</span>, id: "dark",
            Icon: () => <ion-icon name="moon-outline"></ion-icon>
        }
    ];

    return <nav className={styles.navbar}>
            <main className={globalStyles.contentSize}>
            <div className={styles.navlogo}>
                <div className={`${styles.homeImage} logo-website`}></div>
                <h1>{title}</h1>
            </div>
            <div>
                <MsgBox spawnFrom="top" options={optionsTheme} onChangeOption={changeTheme} idBox="theme-selector"/>
            </div>
        </main>
    </nav>
};

function loadScroll() {
    const navbar = document.querySelector(`[class*="${styles.navbar}"]`);

    document.addEventListener("scroll", () => {
        navbar.classList.toggle(styles.scrolledNavbar, window.scrollY);
    });
};

const themeActions = {
    default(root) {
        root.setAttribute("data-color-scheme", "normal");
    },
    light(root) {
        root.setAttribute("data-color-scheme", "light");
    },
    dark(root) {
        root.setAttribute("data-color-scheme", "dark");
    }
};

function changeTheme(ev, idBox) {
    const select = ev.target || ev, optionValue = select.id.slice(idBox.length + 1), root = document.querySelector(':root');

    themeActions[optionValue](root);
};

export default Navbar;