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


function addKeys() {
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
            key.append(eng)
            const engKeyCaseDown = document.createElement("span");
            engKeyCaseDown.classList.add("caseUp");
            engKeyCaseDown.textContent = engCaseDown[i][j];
            eng.append(engKeyCaseDown);
            row.append(key);
        }
        keyboard.append(row)
    }
}
addKeys()

document.addEventListener("keydown", (e) => {
    console.log(`Key "${e.key, e.code}"`);
    const pressedKey = document.querySelector(`.${e.code}`)
    pressedKey.classList.add('press')
});
document.addEventListener("keyup", (e) => {
    const pressedKey = document.querySelector(`.${e.code}`)
    pressedKey.classList.remove('press')
});
