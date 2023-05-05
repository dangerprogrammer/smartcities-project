import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher({options, defaultOption = 0, onChangeOption, idBox}) {
    if (!options ?? !idBox) return;
    
    setTimeout(() => {
        try {
            let ev = document.querySelectorAll(`div[id*="${idBox}"]`)[defaultOption]
            , themeSwitcher = document.querySelector(`div[class*="${styles.themeSwitcher}"]`);
            setOption(ev, idBox);
            showOptions(themeSwitcher, !1);
            !onChangeOption || onChangeOption(ev, idBox);
        } catch (error) {
            
        };
    }, 1);

    return <div className={`${styles.themeSwitcher} ${styles.freezeChild}`} onClick={showOptions}>
        {options.map(({Content, id, Icon, ...contentArgs}) => <div className={styles.iconContent} id={`${idBox}-${id}`} key={id}>
            <span className={styles.iconBox}>
                <Icon/>
            </span>
            <Content className={styles.msgContent} onClick={ev => (setOption(ev, idBox), !onChangeOption || onChangeOption(ev, idBox))} {...contentArgs}/>
        </div>)}
    </div>;
};

function showOptions(ev, forceState) {
    if (ev.target) {
        ev.stopPropagation();
        ev.preventDefault();
    };

    const elem = ev.target || ev, {freezeChild} = styles;

    elem.classList.toggle(freezeChild, forceState);

    const hasFreeze = elem.classList.contains(freezeChild), childsWidth = [...elem.children].map(child => child.offsetWidth),
        elemWidth = hasFreeze ? childsWidth[0] : childsWidth.reduce((acc, curr) => acc + curr);

    const padding = hasFreeze ? '8px' : '0px';

    elem.style.width = `calc(${elemWidth}px + ${padding} * 2)`;

    console.log("hasFreeze:", hasFreeze);
};

function setOption(ev, idBox) {
};

export default ThemeSwitcher;