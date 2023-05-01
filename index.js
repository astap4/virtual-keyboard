function createComponents() {   //Create Monitor and Keyboard

    const main = document.createElement("main");
    main.classList.add('main')
    document.body.append(main);

    const title = document.createElement("h1");
    title.classList.add('main-title');
    title.textContent = 'Virtual Keyboard'
    main.append(title);

    const monitor = document.createElement("div");
    monitor.classList.add('monitor');
    main.append(monitor);

    const screen = document.createElement("textarea");
    screen.classList.add('screen');
    screen.value = "Клавиатура создана в операционной системе Windows.\nДля переключения языка: Ctrl+Alt\n";
    monitor.append(screen);

    const keyboard = document.createElement("div");
    keyboard.className = "keyboard";
    main.append(keyboard);
}
createComponents()

const keyCodes = [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
    ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
];
const rusCaseDown = [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const rusCaseUp = [
    ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
    ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const engCaseDown = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const engCaseUp = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];


function addKeys(lang) {
    const keyboard = document.querySelector('.keyboard')
    for (let i = 0; i < keyCodes.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < keyCodes[i].length; j++) {
            const key = document.createElement("div");
            key.classList.add("key");
            key.classList.add(keyCodes[i][j]);

            const eng = document.createElement("span");
            eng.classList.add("eng");
            const engKeyCaseDown = document.createElement("span");
            engKeyCaseDown.classList.add("caseDown");
            engKeyCaseDown.textContent = engCaseDown[i][j];
            const engKeyCaseUp = document.createElement("span");
            engKeyCaseUp.classList.add("caseUp");
            engKeyCaseUp.classList.add("hidden");
            engKeyCaseUp.textContent = engCaseUp[i][j];
            key.append(eng)
            eng.append(engKeyCaseDown);
            eng.append(engKeyCaseUp);

            const rus = document.createElement("span");
            rus.classList.add("rus");
            const rusKeyCaseDown = document.createElement("span");
            rusKeyCaseDown.classList.add("caseDown");
            rusKeyCaseDown.textContent = rusCaseDown[i][j];
            const rusKeyCaseUp = document.createElement("span");
            rusKeyCaseUp.classList.add("caseUp");
            rusKeyCaseUp.classList.add("hidden");
            rusKeyCaseUp.textContent = rusCaseUp[i][j];
            key.append(rus)
            rus.append(rusKeyCaseDown);
            rus.append(rusKeyCaseUp);
            row.append(key);
            if (lang === 'eng' || !lang) {
                rus.classList.toggle("hidden");
            } else {
                eng.classList.toggle("hidden");
            }
        }
        keyboard.append(row)
    }
}
addKeys(localStorage.getItem('lang'))

document.addEventListener("keydown", (e) => {
    const pressedKey = document.querySelector(`.${e.code}`)
    pressedKey.classList.add('press')
});
document.addEventListener("keyup", (e) => {
    const pressedKey = document.querySelector(`.${e.code}`)
    pressedKey.classList.remove('press')
});


document.addEventListener("keydown", (e) => {
    if (e.code === "AltLeft" && e.ctrlKey) {
        changeLang()
    }
});

function changeLang() {
    const langEn = document.querySelectorAll('.eng')
    const langRu = document.querySelectorAll('.rus')
    langEn.forEach(elem => elem.classList.toggle('hidden'))
    langRu.forEach(elem => elem.classList.toggle('hidden'))
    const lang = localStorage.getItem('lang');
    if (!lang) lang = 'eng';
    if (lang === 'eng') {
        const lang = localStorage.setItem('lang', 'rus');
    } else {
        const lang = localStorage.setItem('lang', 'eng');
    }
}
