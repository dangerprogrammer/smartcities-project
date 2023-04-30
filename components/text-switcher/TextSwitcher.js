import styles from './TextSwitcher.module.scss';

function TextSwitcher({switchedText, typeSpeed = 1e2, wordDuration = 2e3}) {
    let biggestWord;
    setTimeout(() => biggestWord = setWords({switchedText, typeSpeed, wordDuration}), 1e2);

    let loadWordInt = setInterval(() => {
        const parentWord = biggestWord.parentElement;
        if (!biggestWord || !parentWord) return;
        else clearInterval(loadWordInt);

        loadSwitcher(parentWord, biggestWord);
    }, 1e2);

    return <>
    <span>
        <aside></aside>
        <div></div>
        {switchedText.map((text, ind) => <li key={ind} id={`shadow-${ind}`} className={styles.shadowWord}>{text}</li>)}
    </span>
    </>;
};

function loadSwitcher(parentWord, biggestWord) {
    const aside = parentWord.children[0];

    aside.innerText = biggestWord.innerText;
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