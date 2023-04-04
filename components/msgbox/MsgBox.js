import styles from './MsgBox.module.scss';

function MsgBox({spawnFrom, options, defaultOption = 0, onChangeOption, idBox, ...boxArgs}) {
    if (!options ?? !idBox) return;
    
    setTimeout(() => {
        if (document) {
            let ev = document.querySelectorAll(`li[id*="${idBox}"]`)[defaultOption];
            setOption(ev, idBox);
            !onChangeOption || onChangeOption(ev, idBox);
        };
    }, 1);

    return <aside className={styles.mainContent}>
        <button id={`owner-${idBox}`} className={styles.ownerBox} onClick={() => toggleBox(idBox)}></button>
        <ul className={`${styles[`spawn${spawnFrom || "top"}`]} ${styles.optionsBox} ${styles.showBox}`} id={idBox} {...boxArgs}>
            {options.map(({Content, id, Icon, ...contentArgs}) =>
                <li key={id} id={`${idBox}-${id}`} className={styles.optionButton}
                    onClick={ev => (setOption(ev, idBox), !onChangeOption || onChangeOption(ev, idBox))}>
                    <div className={styles.themeIcon}>
                        <Icon />
                    </div>
                    <Content {...contentArgs}/>
                </li>
            )}
        </ul>
    </aside>
};

export default MsgBox;

function toggleBox(idBox, setBox) {
    const {showBox} = styles, ulBox = document.querySelector(`[id="${idBox}"]`), buttonOwner = document.querySelector(`[id="owner-${idBox}"]`);

    if (!ulBox) return;
    ulBox.classList.toggle(showBox, setBox);

    const isShow = ulBox.classList.contains(showBox);

    buttonOwner.classList.toggle(showBox, isShow);
};

function setOption(ev, idBox) {
    const option = ev.target || ev, {optionSelected} = styles, icon = option.children[0],
        buttonOwner = document.querySelector(`[id="owner-${idBox}"]`), anotherOptions = [...option.parentElement.children].filter(({id}) => id != option.id);

    anotherOptions.forEach(anOpt => anOpt.classList.remove(optionSelected));
    option.classList.add(optionSelected);

    buttonOwner.innerHTML = icon.innerHTML;
    toggleBox(idBox, !1);
};