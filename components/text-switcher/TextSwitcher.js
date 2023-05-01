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

    let fullTimeout = 0, intervalTime = 0, intervalCount = 0, startDelay = 0;

    switchedText.forEach((text, ind) => intervalTime += typeSpeed * (switchedText[ind - 1] ? switchedText[ind - 1].length : 0) * 2.5 + wordDuration * 2);

    if (startWord !== undefined) {

        const findedWords = switchedText.filter((text, ind) => ind >= startWord);

        if (!findedWords.length) return;

        div.innerText = findedWords[0];

        startDelay += typeSpeed * findedWords[0].length + wordDuration;

        const textStr = [...findedWords[0].split('')];
        textStr.forEach((str, indStr) => {
            setTimeout(() => div.innerText = findedWords[0].slice(0, findedWords[0].length - (indStr + 1)), wordDuration + (typeSpeed / 2) * indStr);
        });

        findedWords.filter((text, ind) => ind > 0).forEach((findedWord, ind) => {
            startDelay += (typeSpeed / 2) * (findedWords[ind - 1] ? findedWords[ind - 1].length : 0) + wordDuration;

            setTimeout(() => {
                let date = new Date(), h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
                const textStr = [...findedWord.split('')];
                textStr.forEach((str, indStr) => {
                    setTimeout(() => div.innerText = findedWord.slice(0, indStr + 1), typeSpeed * findedWord.length);
                    setTimeout(() => div.innerText = findedWord.slice(0, findedWord.length - (indStr + 1)), typeSpeed * findedWord.length + wordDuration + (typeSpeed / 2) * indStr);
                });
            }, startDelay);
        });
    };

    let switchInterval;
    setTimeout(() => {
        loadEachWord();

        switchInterval = setInterval(() => {
            intervalCount++;

            if (!infiniteSwitch) clearInterval(switchInterval);

            fullTimeout = 0;

            let date = new Date(), h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
            console.log("interval each word", `at ${h}:${m}:${s}`);
            loadEachWord();
        }, intervalTime);
    }, startDelay);

    function loadEachWord() {
        switchedText.forEach((text, ind) => {
            fullTimeout += typeSpeed * (switchedText[ind - 1] ? switchedText[ind - 1].length : 0) * 2.5 + wordDuration;

            setTimeout(() => {
                let date = new Date(), h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
                console.log(`writing word ${text}`, `at ${h}:${m}:${s}`);
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