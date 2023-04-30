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

const keysObjects = [[
    { key: 'Backquote', ruCaseUp: 'Ё', ruCaseDown: 'ё', enCaseUp: '~', enCaseDown: '`' },
    { key: 'Digit1', ruCaseUp: '!', ruCaseDown: '1', enCaseUp: '!', enCaseDown: '1' },
    { key: 'Digit2', ruCaseUp: '"', ruCaseDown: '2', enCaseUp: '@', enCaseDown: '2' },
    { key: 'Digit3', ruCaseUp: '№', ruCaseDown: '3', enCaseUp: '#', enCaseDown: '3' },
    { key: 'Digit4', ruCaseUp: ';', ruCaseDown: '4', enCaseUp: '$', enCaseDown: '4' },
    { key: 'Digit5', ruCaseUp: '%', ruCaseDown: '5', enCaseUp: '%', enCaseDown: '5' },
    { key: 'Digit6', ruCaseUp: ':', ruCaseDown: '6', enCaseUp: '^', enCaseDown: '6' },
    { key: 'Digit7', ruCaseUp: '?', ruCaseDown: '7', enCaseUp: '&', enCaseDown: '7' },
    { key: 'Digit8', ruCaseUp: '*', ruCaseDown: '8', enCaseUp: '*', enCaseDown: '8' },
    { key: 'Digit9', ruCaseUp: '(', ruCaseDown: '9', enCaseUp: '(', enCaseDown: '9' },
    { key: 'Digit0', ruCaseUp: ')', ruCaseDown: '0', enCaseUp: ')', enCaseDown: '0' },
    { key: 'Minus', ruCaseUp: '_', ruCaseDown: '-', enCaseUp: '_', enCaseDown: '-' },
    { key: 'Equal', ruCaseUp: '+', ruCaseDown: '=', enCaseUp: '+', enCaseDown: '=' },
    { key: 'Backspace', ruCaseUp: 'Backspace', ruCaseDown: 'Backspace', enCaseUp: 'Backspace', enCaseDown: 'Backspace' }],
[
    { key: 'Tab', ruCaseUp: 'Tab', ruCaseDown: 'Tab', enCaseUp: 'Tab', enCaseDown: 'Tab' },
    { key: 'KeyQ', ruCaseUp: 'Й', ruCaseDown: 'й', enCaseUp: 'Q', enCaseDown: 'q' },
    { key: 'KeyW', ruCaseUp: 'Ц', ruCaseDown: 'ц', enCaseUp: 'W', enCaseDown: 'w' },
    { key: 'KeyE', ruCaseUp: 'У', ruCaseDown: 'у', enCaseUp: 'E', enCaseDown: 'e' },
    { key: 'KeyR', ruCaseUp: 'К', ruCaseDown: 'к', enCaseUp: 'R', enCaseDown: 'r' },
    { key: 'KeyT', ruCaseUp: 'Е', ruCaseDown: 'е', enCaseUp: 'T', enCaseDown: 't' },
    { key: 'KeyY', ruCaseUp: 'Н', ruCaseDown: 'н', enCaseUp: 'Y', enCaseDown: 'y' },
    { key: 'KeyU', ruCaseUp: 'Г', ruCaseDown: 'г', enCaseUp: 'U', enCaseDown: 'u' },
    { key: 'KeyI', ruCaseUp: 'Ш', ruCaseDown: 'ш', enCaseUp: 'I', enCaseDown: 'i' },
    { key: 'KeyO', ruCaseUp: 'Щ', ruCaseDown: 'щ', enCaseUp: 'O', enCaseDown: 'o' },
    { key: 'KeyP', ruCaseUp: 'З', ruCaseDown: 'з', enCaseUp: 'P', enCaseDown: 'p' },
    { key: 'BracketLeft', ruCaseUp: 'Х', ruCaseDown: 'х', enCaseUp: '{', enCaseDown: '[' },
    { key: 'BracketRight', ruCaseUp: 'Ъ', ruCaseDown: 'ъ', enCaseUp: '}', enCaseDown: ']' },
    { key: 'Backslash', ruCaseUp: '/', ruCaseDown: '\\', enCaseUp: '|', enCaseDown: '\\' },
    { key: 'Delete', ruCaseUp: 'Del', ruCaseDown: 'Del', enCaseUp: 'Del', enCaseDown: 'Del' }],
[
    { key: 'CapsLock', ruCaseUp: 'CapsLock', ruCaseDown: 'CapsLock', enCaseUp: 'CapsLock', enCaseDown: 'CapsLock' },
    { key: 'KeyA', ruCaseUp: 'Ф', ruCaseDown: 'ф', enCaseUp: 'A', enCaseDown: 'a' },
    { key: 'KeyS', ruCaseUp: 'Ы', ruCaseDown: 'ы', enCaseUp: 'S', enCaseDown: 's' },
    { key: 'KeyD', ruCaseUp: 'В', ruCaseDown: 'в', enCaseUp: 'D', enCaseDown: 'd' },
    { key: 'KeyF', ruCaseUp: 'А', ruCaseDown: 'а', enCaseUp: 'F', enCaseDown: 'f' },
    { key: 'KeyG', ruCaseUp: 'П', ruCaseDown: 'п', enCaseUp: 'G', enCaseDown: 'g' },
    { key: 'KeyH', ruCaseUp: 'Р', ruCaseDown: 'р', enCaseUp: 'H', enCaseDown: 'h' },
    { key: 'KeyJ', ruCaseUp: 'О', ruCaseDown: 'о', enCaseUp: 'J', enCaseDown: 'j' },
    { key: 'KeyK', ruCaseUp: 'Л', ruCaseDown: 'л', enCaseUp: 'K', enCaseDown: 'k' },
    { key: 'KeyL', ruCaseUp: 'Д', ruCaseDown: 'д', enCaseUp: 'L', enCaseDown: 'l' },
    { key: 'Semicolon', ruCaseUp: 'Ж', ruCaseDown: 'ж', enCaseUp: ':', enCaseDown: ';' },
    { key: 'Quote', ruCaseUp: 'Э', ruCaseDown: 'э', enCaseUp: '"', enCaseDown: "'" },
    { key: 'Enter', ruCaseUp: 'Enter', ruCaseDown: 'Enter', enCaseUp: 'Enter', enCaseDown: 'Enter' }],
[
    { key: 'ShiftLeft', ruCaseUp: 'Shift', ruCaseDown: 'Shift', enCaseUp: 'Shift', enCaseDown: 'Shift' },
    { key: 'KeyZ', ruCaseUp: 'Я', ruCaseDown: 'я', enCaseUp: 'Z', enCaseDown: 'z' },
    { key: 'KeyX', ruCaseUp: 'Ч', ruCaseDown: 'ч', enCaseUp: 'X', enCaseDown: 'x' },
    { key: 'KeyC', ruCaseUp: 'С', ruCaseDown: 'с', enCaseUp: 'C', enCaseDown: 'c' },
    { key: 'KeyV', ruCaseUp: 'М', ruCaseDown: 'м', enCaseUp: 'V', enCaseDown: 'v' },
    { key: 'KeyB', ruCaseUp: 'И', ruCaseDown: 'и', enCaseUp: 'B', enCaseDown: 'b' },
    { key: 'KeyN', ruCaseUp: 'Т', ruCaseDown: 'т', enCaseUp: 'N', enCaseDown: 'n' },
    { key: 'KeyM', ruCaseUp: 'Ь', ruCaseDown: 'ь', enCaseUp: 'M', enCaseDown: 'm' },
    { key: 'Comma', ruCaseUp: 'Б', ruCaseDown: 'б', enCaseUp: '<', enCaseDown: ',' },
    { key: 'Period', ruCaseUp: 'Ю', ruCaseDown: 'ю', enCaseUp: '>', enCaseDown: '.' },
    { key: 'Slash', ruCaseUp: ',', ruCaseDown: '.', enCaseUp: '?', enCaseDown: '/' },
    { key: 'ArrowUp', ruCaseUp: '▲', ruCaseDown: '▲', enCaseUp: '▲', enCaseDown: '▲' },
    { key: 'ShiftRight', ruCaseUp: 'Shift', ruCaseDown: 'Shift', enCaseUp: 'Shift', enCaseDown: 'Shift' }],
[
    {key: 'ControlLeft', ruCaseUp: 'Ctrl', ruCaseDown: 'Ctrl', enCaseUp: 'Ctrl', enCaseDown: 'Ctrl'},
    {key: 'MetaLeft', ruCaseUp: 'Win', ruCaseDown: 'Win', enCaseUp: 'Win', enCaseDown: 'Win'},
    {key: 'AltLeft', ruCaseUp: 'Alt', ruCaseDown: 'Alt', enCaseUp: 'Alt', enCaseDown: 'Alt'},
    {key: 'Space', ruCaseUp: ' ', ruCaseDown: ' ', enCaseUp: ' ', enCaseDown: ' '},
    {key: 'AltRight', ruCaseUp: 'Alt', ruCaseDown: 'Alt', enCaseUp: 'Alt', enCaseDown: 'Alt'},
    {key: 'ArrowLeft', ruCaseUp: '◄', ruCaseDown: '◄', enCaseUp: '◄', enCaseDown: '◄'},
    {key: 'ArrowDown', ruCaseUp: '▼', ruCaseDown: '▼', enCaseUp: '▼', enCaseDown: '▼'},
    {key: 'ArrowRight', ruCaseUp: '►', ruCaseDown: '►', enCaseUp: '►', enCaseDown: '►'},
    {key: 'ControlRight', ruCaseUp: 'Ctrl', ruCaseDown: 'Ctrl', enCaseUp: 'Ctrl', enCaseDown: 'Ctrl'}]]


function addKeys() {
    const keyboard = document.querySelector('.keyboard')
    for (let i = 0; i < keysObjects.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < keysObjects[i].length; j++) {
            const key = document.createElement("div");
            key.classList.add("key");
            key.classList.add(keysObjects[i][j].key);
            const eng = document.createElement("span");
            eng.classList.add("eng");
            key.append(eng)
            const engKeyCaseUp = document.createElement("span");
            engKeyCaseUp.classList.add("caseUp");
            engKeyCaseUp.textContent = keysObjects[i][j].enCaseDown;
            console.log(keysObjects[i][j].enCaseDown)
            eng.append(engKeyCaseUp);
            row.append(key);
        }
        keyboard.append(row)   
    }
}
addKeys()