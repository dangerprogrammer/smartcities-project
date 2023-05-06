import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher({options, defaultOption = 0, onChangeOption, idBox}) {
    if (!options ?? !idBox) return;
    
    setTimeout(() => {
        try {
            let ev = document.querySelectorAll(`div[id^="${idBox}"]`)[defaultOption];
            setOption(ev, idBox);
            loadDOM(idBox, onChangeOption);
            showOptions(idBox, !0);
            !onChangeOption || onChangeOption(ev, idBox);
        } catch (error) {
            
        };
    }, 1);

    return <div className={styles.themeSwitcher}>
        <div className={`${styles.optionsContent} ${styles.freezeChild}`} onClick={() => showOptions(idBox)}>
            <div className={styles.iconsContainer}>
                {options.map(({id, Icon}) => <div className={styles.iconContent} id={`${idBox}-${id}`} key={id}
                    onClick={ev => (setOption(ev, idBox), !onChangeOption || onChangeOption(ev, idBox))}>
                    <span className={styles.iconBox}>
                        <Icon/>
                    </span>
                </div>)}
                <div className={styles.backOptions} onClick={() => showOptions(idBox, !1)}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
        </div>
        <div className={`${styles.optionsContent} ${styles.shadowContent}`} onClick={() => showOptions(idBox)}>
            {options.map(({Content, id, Icon, ...contentArgs}) => <div className={styles.iconContent} id={`shadow-${idBox}-${id}`} key={id}
                onClick={ev => (setOption(ev, idBox), !onChangeOption || onChangeOption(ev, idBox))}>
                <Content className={styles.msgContent} {...contentArgs}/>
            </div>)}
        </div>
    </div>
};

function loadDOM(idBox, onChangeOption) {
    const options = [...document.querySelectorAll(`div[id^="${idBox}"]`)], shadowOptions = [...document.querySelectorAll(`div[id^="shadow-${idBox}"]`)], {showElem, activeOption} = styles, optionsHoverTheme = [], hoverTime = 5e2;

    let optionActived = options.find(option => option.classList.contains(activeOption));

    options.forEach((option, ind) => {
        if (!optionsHoverTheme[ind]) optionsHoverTheme[ind] = {ev: option, timeout: !1};
        
        option.addEventListener("mouseenter", () => {
            optionActived = options.find(option => option.classList.contains(activeOption));
            if (optionActived.id === option.id) return;
            const refShadow = shadowOptions[ind], refHover = optionsHoverTheme[ind], {ev} = refHover;
            
            refHover.setHoverTime = setTimeout(() => {
                !onChangeOption || onChangeOption(ev, idBox);
                refHover.timeout = !0;
            }, hoverTime);

            refShadow.classList.add(showElem);
        });

        option.addEventListener("mouseout", () => {
            optionActived = options.find(option => option.classList.contains(activeOption));
            const refShadow = shadowOptions[ind], refHover = optionsHoverTheme[ind];

            clearTimeout(refHover.setHoverTime);
            if (refHover.timeout) !onChangeOption || onChangeOption(optionActived, idBox);
            refHover.timeout = !1;

            refShadow.classList.remove(showElem);
        });
    });
};

function showOptions(idBox, forceState) {
    const optionsContent = document.querySelector(`div[class*="${styles.optionsContent}"]`), options = [...document.querySelectorAll(`div[id^="${idBox}"]`)], {freezeChild, activeOption} = styles, optionActived = options.find(option => option.classList.contains(activeOption));

    optionsContent.classList.toggle(freezeChild, forceState);

    const hasFreeze = optionsContent.classList.contains(freezeChild), childsWidth = [...optionsContent.children[0].children].filter(child => !child.classList.contains(styles.shadowIcon)).map(child => child.offsetWidth),
        elemWidth = childsWidth.filter((child, ind) => hasFreeze ? ind === 0 : child).reduce((acc, curr) => acc + curr), {paddingLeft, paddingRight, transitionDuration} = getComputedStyle(optionsContent), timeout = eval(`${transitionDuration.slice(0, transitionDuration.length - 1)}e3`);

    optionsContent.style.setProperty('--width-size', `calc(${elemWidth}px + ${paddingLeft} + ${paddingRight})`);
    if (hasFreeze) setTimeout(() => {
        optionsContent.scrollTo({
            top: 0,
            left: optionActived.offsetLeft,
            behavior: "smooth"
        });
    }, timeout);
};

function setOption(ev, idBox) {
    const option = ev.target || ev, siblings = [...option.parentElement.children].filter(sibling => sibling.id != option.id),
        {activeOption} = styles;

    siblings.forEach(sibling => sibling.classList.remove(activeOption));
    option.classList.add(activeOption);
};

export default ThemeSwitcher;