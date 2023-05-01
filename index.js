const container = document.createElement('section');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('section');
const message = document.createElement('section');
const rowSim1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowSim2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']','\\','Del'];
const rowSim3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const rowSim4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '\/', '&uarr;', 'Shift'];
const rowSim5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
message.textContent = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация левые: ctrl, alt';
document.body.append(container);
container.append(textarea);
container.append(keyboard);
container.append(message);

const createRows = () => {
  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    keyboard.append(row);
    row.classList.add('row');
  }
};

createRows();

container.classList.add('container');
textarea.classList.add('textarea');
keyboard.classList.add('keyboard');
message.classList.add('message');

const rows = document.querySelectorAll('.row');

const createFirstRow = () => {
  for (let i = 0; i < rowSim1.length; i++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keybtn');
    rowEl.innerHTML = `${rowSim1[i]}`;
    rows[0].append(rowEl);
  }
};
createFirstRow();

const createSecondRow = () => {
  for (let i = 0; i < rowSim2.length; i++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keybtn');
    rowEl.innerHTML = `${rowSim2[i]}`;
    rows[1].append(rowEl);
  }
};
createSecondRow();

const createThirdRow = () => {
  for (let i = 0; i < rowSim3.length; i++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keybtn');
    rowEl.innerHTML = `${rowSim3[i]}`;
    rows[2].append(rowEl);
  }
};
createThirdRow();

const createFourthRow = () => {
  for (let i = 0; i < rowSim4.length; i++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keybtn');
    rowEl.innerHTML = `${rowSim4[i]}`;
    rows[3].append(rowEl);
  }
};
createFourthRow();

const createFifthRow = () => {
  for (let i = 0; i < rowSim5.length; i++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keybtn');
    rowEl.innerHTML = `${rowSim5[i]}`;
    if (rowEl.innerHTML == ' ') {
      rowEl.classList.add('space')
    }
    rows[4].append(rowEl);
  }
};
createFifthRow();

let count = 0;
let flag = false;

const countCaps = (event) => {
  if (event.key === 'CapsLock' || event.target.textContent === 'CapsLock') {
    count += 1;
  }
  else if (event.key === 'Shift') {
    flag = true;
  }
  count += Number(flag);
  return count;
};

const pressKey = (event) => {
  const element = event.target;
  if (element.innerHTML === 'Ctrl' || element.innerHTML === 'Alt' || element.innerHTML === 'Win' || element.innerHTML === 'CapsLock' || element.innerHTML === 'Del' || element.innerHTML === 'Backspace' || element.innerHTML === 'Tab' || element.innerHTML === 'Enter') {
  }
  else if (count % 2 === 0) {
    textarea.value += `${element.innerHTML}`;
  }
  else if (count % 2 === 1) {
    textarea.value += `${element.innerHTML.toUpperCase()}`;
  }
};

const keyTab = (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    textarea.value += '    ';
  }
};

const showArrow = (event) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    textarea.value += '→';
  }
  else if (event.key === 'ArrowUp') {
    event.preventDefault();
    textarea.value += '↑';
  }
  else if (event.key === 'ArrowDown') {
    event.preventDefault();
    textarea.value += '↓';
  }
  else if (event.key === 'ArrowLeft') {
    event.preventDefault();
    textarea.value += '←';
  }
};

const tabText = () => {
  textarea.value += '    ';
};

const pressColor = (event) => {
  const element = event.target;
  element.classList.toggle('presscolor');
  textarea.focus();
};

const keys = document.querySelectorAll('.keybtn');

const focusArea = () => {
  textarea.focus();
};

const upperKey = (event) => {
  if (event.key === "CapsLock" || event.target.textContent === "CapsLock") {
    keys.forEach((element) => {
      if (element.innerHTML !== 'Tab' && element.innerHTML !== 'CapsLock' && element.innerHTML !== 'Shift' && element.innerHTML !== 'Ctrl' && element.innerHTML !== 'Win' && element.innerHTML !== 'Alt' && element.innerHTML !== 'Backspace' && element.innerHTML !== 'Del' && element.innerHTML !== 'Enter') {
        element.classList.toggle('uppercase');
      }
    });
  }
};

const actEnter = () => {
  textarea.value += '\n';
};

const backspaceText = () => {
  const str = textarea.value;
  textarea.value = str.slice(0, -1);
};

const deleteText = () => {
  const str = textarea.value;
  textarea.value = str.slice(1);
};

keys.forEach((element) => {
  element.addEventListener('click', pressKey);
  element.addEventListener('mousedown', pressColor);
  element.addEventListener('mouseup', pressColor);
  if (element.innerHTML === 'CapsLock') {
    element.addEventListener('click', countCaps);
    element.addEventListener('click', upperKey);
  }
  else if (element.innerHTML === 'Backspace') {
    element.addEventListener('click', backspaceText);
  }
  else if (element.innerHTML === 'Del') {
    element.addEventListener('click', deleteText);
  }
  else if (element.innerHTML === 'Tab') {
    element.addEventListener('click', tabText);
  }
  else if (element.innerHTML === 'Enter') {
    element.addEventListener('click', actEnter);
  }
});

const showTouch = (event) => {
  keys.forEach((element) => {
    if (event.key === element.textContent) {
      element.classList.toggle('presscolor');
    }
  })
};

window.addEventListener('keydown', focusArea);
window.addEventListener('keyup', upperKey);
window.addEventListener('keydown', countCaps);
window.addEventListener('keydown', keyTab);
window.addEventListener('keydown', showArrow);
window.addEventListener('keydown', showTouch);
window.addEventListener('keyup', showTouch);
