import styles from './TextSwitcher.module.scss';

function TextSwitcher({switchedText, typeSpeed = 1e2, wordDuration = 3e3, startWord, infiniteSwitch}) {
    let biggestWord;
    let loadSystem = setInterval(() => {
        let word0 = document.querySelector('li[id*="shadow-"]');
        if (!word0 || word0.offsetHeight + word0.offsetWidth === 0) return;
        else clearInterval(loadSystem);

        biggestWord = setWords();

        const parentWord = biggestWord.parentElement;

        loadSwitcher(parentWord, biggestWord, switchedText, typeSpeed, wordDuration, infiniteSwitch, startWord);
    }, 1e2);

    return <>
    <span>
        <aside></aside>
        <div></div>
        {switchedText.map((text, ind) => <li key={ind} id={`shadow-${ind}`} className={styles.shadowWord}>{text}</li>)}
    </span>
    <span className={styles.shadowRes}></span>
    </>;
};

function loadSwitcher(parentWord, biggestWord, switchedText, typeSpeed, wordDuration, infiniteSwitch, startWord) {
    const shadowRes = document.querySelector(`[class*="${styles.shadowRes}"]`), div = parentWord.children[1];

    shadowRes.innerHTML = biggestWord.innerHTML;

    let fullTimeout = 0, intervalTime = 0, intervalCount = 0, startDelay = 0, firstLoad = !0;

    switchedText.forEach((text, ind) => intervalTime += typeSpeed * (switchedText[ind - 1] ? switchedText[ind - 1].length : 0) * 2.5 + wordDuration);

    console.log(intervalTime);

    if (startWord !== undefined) {
        firstLoad = !1;

        const findedWord = switchedText[startWord] || switchedText[0];

        if (!findedWord) return;

        div.innerText = findedWord;

        startDelay += (typeSpeed / 2) * findedWord.length + wordDuration;

        const textStr = [...findedWord.split('')];
        textStr.forEach((str, indStr) => {
            setTimeout(() => div.innerText = findedWord.slice(0, findedWord.length - (indStr + 1)), typeSpeed * findedWord.length + wordDuration + (typeSpeed / 2) * indStr);
        });
    };

    let switchInterval;
    setTimeout(() => {
        loadEachWord();

        switchInterval = setInterval(() => {
        intervalCount++;

        if (!infiniteSwitch) clearInterval(switchInterval);

        firstLoad = !1;

        loadEachWord();
        }, intervalTime + wordDuration);
    }, startDelay);

    function loadEachWord() {
        console.log("loading words");

        switchedText.forEach((text, ind) => {
            fullTimeout += typeSpeed * (switchedText[ind - 1] ? switchedText[ind - 1].length : 0) * 2.5 + wordDuration;

            if (startWord !== undefined && firstLoad && ind <= startWord) return;

            setTimeout(() => {
                const textStr = [...text.split('')];
                textStr.forEach((str, indStr) => {
                    setTimeout(() => div.innerText = text.slice(0, indStr + 1), typeSpeed * indStr);
                    if (infiniteSwitch || ind !== switchedText.length - 1) setTimeout(() => div.innerText = text.slice(0, text.length - (indStr + 1)), typeSpeed * text.length + wordDuration + (typeSpeed / 2) * indStr);
                });
            }, fullTimeout);
        });
    };
};

function setWords() {
    const words = [...document.querySelectorAll(`li[id*="shadow-"]`)];
    let biggestWord = words[0];

    words.forEach(word => {
        if (word.offsetHeight + word.offsetWidth > biggestWord.offsetHeight + biggestWord.offsetWidth) biggestWord = word;
    });

    return biggestWord;
};

export default TextSwitcher;