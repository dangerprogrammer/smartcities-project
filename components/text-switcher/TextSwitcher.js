import styles from './TextSwitcher.module.scss';

function TextSwitcher({switchedText, typeSpeed = 1e2, wordDuration = 2e3}) {
    let biggestWord;
    let loadSystem = setInterval(() => {
        let word0 = document.querySelector('li[id*="shadow-"]');
        if (!word0 || word0.offsetHeight + word0.offsetWidth === 0) return <span>Teste</span>;
        else clearInterval(loadSystem);

        biggestWord = setWords();

        const parentWord = biggestWord.parentElement;

        loadSwitcher(parentWord, biggestWord, switchedText, typeSpeed, wordDuration);
    }, 1e2);

    return <>
    <span>
        <aside></aside>
        <div></div>
        {switchedText.map((text, ind) => <li key={ind} id={`shadow-${ind}`} className={styles.shadowWord}>{text}</li>)}
    </span>
    </>;
};

function loadSwitcher(parentWord, biggestWord, switchedText, typeSpeed, wordDuration) {
    const aside = parentWord.children[0], div = parentWord.children[1];

    aside.innerText = biggestWord.innerText;

    let fullTimeout = 0;
    switchedText.forEach((text, ind) => {
        fullTimeout += typeSpeed * (switchedText[ind - 1] ? switchedText[ind - 1].length : 0) * 2.5 + wordDuration;
        setTimeout(() => {
            const textStr = [...text.split('')];
            textStr.forEach((str, indStr) => {
                setTimeout(() => div.innerText = text.slice(0, indStr + 1), typeSpeed * indStr);
                if (ind !== switchedText.length - 1) setTimeout(() => div.innerText = text.slice(0, text.length - (indStr + 1)), typeSpeed * text.length + wordDuration + (typeSpeed / 2) * indStr);
            });
        }, fullTimeout);
    });
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