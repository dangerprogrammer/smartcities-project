import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher({options, defaultOption = 0, onChangeOption, idBox}) {
    if (!options ?? !idBox) return;
    
    setTimeout(() => {
        try {
            let ev = document.querySelectorAll(`div[id*="${idBox}"]`)[defaultOption];
            setOption(ev, idBox);
            !onChangeOption || onChangeOption(ev, idBox);
        } catch (error) {
            
        };
    }, 1);

    return <div className={styles.themeSwitcher} onClick={showOptions}>
        {options.map(({Content, id, Icon, ...contentArgs}) => <div className={styles.iconContent} id={`${idBox}-${id}`} key={id}>
            <span className={styles.iconBox}>
                <Icon/>
            </span>
            <Content className={styles.msgContent} onClick={ev => (setOption(), !onChangeOption || onChangeOption())} {...contentArgs}/>
        </div>)}
    </div>;
};

function showOptions(ev) {
    ev.stopPropagation();
    ev.preventDefault();

    const elem = ev.target || ev;

    console.log(elem);
};

function setOption(ev, idBox) {
};

export default ThemeSwitcher;