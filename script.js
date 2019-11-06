const state = {
  language: 0,
  upperCase: 0,
  shift: false,
  ctrl: false,
  alt: false,
  capsLock: false,
};
const arrLiteralObject = [
  {
    keyWhich: 192,
    arrEventKeys: ['ё', 'Ё', '`', '~'],
  },
  {
    keyWhich: 49,
    arrEventKeys: ['1', '!', '1', '!'],
  },
  {
    keyWhich: 50,
    arrEventKeys: ['2', '"', '2', '@'],
  },
  {
    keyWhich: 51,
    arrEventKeys: ['3', '№', '3', '#'],
  },
  {
    keyWhich: 52,
    arrEventKeys: ['4', ';', '4', '$'],
  },
  {
    keyWhich: 53,
    arrEventKeys: ['5', '%', '5', '%'],
  },
  {
    keyWhich: 54,
    arrEventKeys: ['6', ':', '6', '^'],
  },
  {
    keyWhich: 55,
    arrEventKeys: ['7', '?', '7', '&'],
  },
  {
    keyWhich: 56,
    arrEventKeys: ['8', '*', '8', '*'],
  },
  {
    keyWhich: 57,
    arrEventKeys: ['9', '(', '9', '('],
  },
  {
    keyWhich: 48,
    arrEventKeys: ['0', ')', '0', ')'],
  },
  {
    keyWhich: 189,
    arrEventKeys: ['-', '_', '-', '_'],
  },
  {
    keyWhich: 187,
    arrEventKeys: ['=', '+', '=', '+'],
  },
  {
    keyWhich: 81,
    arrEventKeys: ['й', 'Й', 'q', 'Q'],
  },
  {
    keyWhich: 87,
    arrEventKeys: ['ц', 'Ц', 'w', 'W'],
  },
  {
    keyWhich: 69,
    arrEventKeys: ['у', 'У', 'e', 'E'],
  },
  {
    keyWhich: 82,
    arrEventKeys: ['к', 'К', 'r', 'R'],
  },
  {
    keyWhich: 84,
    arrEventKeys: ['е', 'Е', 't', 'T'],
  },
  {
    keyWhich: 89,
    arrEventKeys: ['н', 'Н', 'y', 'Y'],
  },
  {
    keyWhich: 85,
    arrEventKeys: ['г', 'Г', 'u', 'U'],
  },
  {
    keyWhich: 73,
    arrEventKeys: ['ш', 'Ш', 'i', 'I'],
  },
  {
    keyWhich: 79,
    arrEventKeys: ['щ', 'Щ', 'o', 'O'],
  },
  {
    keyWhich: 80,
    arrEventKeys: ['з', 'З', 'p', 'P'],
  },
  {
    keyWhich: 219,
    arrEventKeys: ['х', 'Х', '[', '{'],
  },
  {
    keyWhich: 221,
    arrEventKeys: ['ъ', 'Ъ', ']', '}'],
  },
  {
    keyWhich: 220,
    arrEventKeys: ['\\', '/', '\\', '|'],
  },
  {
    keyWhich: 65,
    arrEventKeys: ['ф', 'Ф', 'a', 'A'],
  },
  {
    keyWhich: 83,
    arrEventKeys: ['ы', 'Ы', 's', 'S'],
  },
  {
    keyWhich: 68,
    arrEventKeys: ['в', 'В', 'd', 'D'],
  },
  {
    keyWhich: 70,
    arrEventKeys: ['а', 'А', 'f', 'F'],
  },
  {
    keyWhich: 71,
    arrEventKeys: ['п', 'П', 'g', 'G'],
  },
  {
    keyWhich: 72,
    arrEventKeys: ['р', 'Р', 'h', 'H'],
  },
  {
    keyWhich: 74,
    arrEventKeys: ['о', 'О', 'j', 'J'],
  },
  {
    keyWhich: 75,
    arrEventKeys: ['л', 'Л', 'k', 'K'],
  },
  {
    keyWhich: 76,
    arrEventKeys: ['д', 'Д', 'l', 'L'],
  },
  {
    keyWhich: 186,
    arrEventKeys: ['ж', 'Ж', ';', ':'],
  },
  {
    keyWhich: 222,
    arrEventKeys: ['э', 'Э', '\'', '"'],
  },
  {
    keyWhich: 90,
    arrEventKeys: ['я', 'Я', 'z', 'Z'],
  },
  {
    keyWhich: 88,
    arrEventKeys: ['ч', 'Ч', 'x', 'X'],
  },
  {
    keyWhich: 67,
    arrEventKeys: ['с', 'С', 'c', 'C'],
  },
  {
    keyWhich: 86,
    arrEventKeys: ['м', 'М', 'v', 'V'],
  },
  {
    keyWhich: 66,
    arrEventKeys: ['и', 'И', 'b', 'B'],
  },
  {
    keyWhich: 78,
    arrEventKeys: ['т', 'Т', 'n', 'N'],
  },
  {
    keyWhich: 77,
    arrEventKeys: ['ь', 'Ь', 'm', 'M'],
  },
  {
    keyWhich: 188,
    arrEventKeys: ['б', 'Б', ',', '<'],
  },
  {
    keyWhich: 190,
    arrEventKeys: ['ю', 'Ю', '.', '>'],
  },
  {
    keyWhich: 191,
    arrEventKeys: ['.', ',', '/', '?'],
  },
];

document.body.addEventListener('keydown', (event) => {
  const key = event.which;
  const { location } = event;
  let idNum;
  if (location === 1 || location === 0) {
    idNum = `id_${key}`;
  } else if (location === 2) {
    idNum = `id_${key}_right`;
  }
  const elem = document.getElementById(idNum);
  if (elem.id === 'id_16' || elem.id === 'id_16_right') {
    state.shift = true;
    state.upperCase = (state.upperCase + 1) % 2;
    if (state.alt === true) {
      state.language = (state.language + 1) % 2;
      const arrLiteral = Array.from(document.getElementsByClassName('literal'));
      arrLiteral.forEach((e, i) => {
        e.textContent = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
        e.value = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
      });
    }
    const arrLiteral = Array.from(document.getElementsByClassName('literal'));
    arrLiteral.forEach((e, i) => {
      e.textContent = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
      e.value = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
    });
  }
});

document.body.addEventListener('keyup', (event) => {
  const key = event.which;
  const { location } = event;
  let idNum;
  if (location === 1 || location === 0) {
    idNum = `id_${key}`;
  } else if (location === 2) {
    idNum = `id_${key}_right`;
  }
  const elem = document.getElementById(idNum);
  if (elem.id === 'id_16' || elem.id === 'id_16_right') {
    state.shift = false;
    state.upperCase = (state.upperCase + 1) % 2;
    const arrLiteral = Array.from(document.getElementsByClassName('literal'));
    arrLiteral.forEach((e, i) => {
      e.textContent = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
      e.value = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
    });
  }
});

document.body.addEventListener('keydown', (event) => {
  const key = event.which;
  const { location } = event;
  let idNum;
  if (location === 1 || location === 0) {
    idNum = `id_${key}`;
  } else if (location === 2) {
    idNum = `id_${key}_right`;
  }
  const elem = document.getElementById(idNum);
  if (elem.id === 'id_18' || elem.id === 'id_18_right') {
    state.alt = true;
    if (state.shift === true) {
      state.language = (state.language + 1) % 2;
      const arrLiteral = Array.from(document.getElementsByClassName('literal'));
      arrLiteral.forEach((e, i) => {
        e.textContent = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
        e.value = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
      });
    }
  }
});

document.body.addEventListener('keyup', (event) => {
  const key = event.which;
  const { location } = event;
  let idNum;
  if (location === 1 || location === 0) {
    idNum = `id_${key}`;
  } else if (location === 2) {
    idNum = `id_${key}_right`;
  }
  const elem = document.getElementById(idNum);
  if (elem.id === 'id_18' || elem.id === 'id_18_right') {
    state.alt = false;
  }
});

const divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.append(divWrapper);

const textArea = document.createElement('textarea');
textArea.className = 'text_window';
textArea.id = 'id_text_area';
divWrapper.appendChild(textArea);

const divKeyboard = document.createElement('div');
divKeyboard.className = 'keyboard_window';
divWrapper.appendChild(divKeyboard);

document.body.addEventListener('keydown', (event) => {
  const key = event.which;
  const arrLiteralButton = Array.from(document.getElementsByClassName('literal'));
  arrLiteralButton.forEach((element, index) => {
    const button = element;
    function animationKeyDown() {
      button.style.backgroundColor = 'rgb(0, 191, 255)';
      button.style.borderRadius = '50%';
    }
    if (key === arrLiteralObject[index].keyWhich) {
      setTimeout(animationKeyDown, 150);
    }
  });
  const { location } = event;
  let idNum;
  if (location === 1 || location === 0) {
    idNum = `id_${key}`;
  } else if (location === 2) {
    idNum = `id_${key}_right`;
  }
  const elem = document.getElementById(idNum);
  function animationDown() {
    elem.style.backgroundColor = 'rgb(0, 191, 255)';
    elem.style.borderRadius = '50%';
  }
  if (elem.id === idNum) {
    setTimeout(animationDown, 150);
  }
});

document.body.addEventListener('keyup', (event) => {
  const key = event.which;
  const arrLiteralButton = Array.from(document.getElementsByClassName('literal'));
  arrLiteralButton.forEach((element, index) => {
    const button = element;
    function animationKeyUp() {
      button.style.backgroundColor = 'lightslategrey';
      button.style.borderRadius = '10%';
    }
    if (key === arrLiteralObject[index].keyWhich) {
      setTimeout(animationKeyUp, 250);
    }
  });
  const { location } = event;
  let idNum;
  if (location === 1 || location === 0) {
    idNum = `id_${key}`;
  } else if (location === 2) {
    idNum = `id_${key}_right`;
  }
  const elem = document.getElementById(idNum);
  function animationUp() {
    elem.style.backgroundColor = 'lightslategrey';
    elem.style.borderRadius = '10%';
  }
  if (elem.id === idNum) {
    setTimeout(animationUp, 250);
  }
});

divKeyboard.addEventListener('mousedown', (event) => {
  const idElem = event.target.id;
  let button;
  function animationMouseDown() {
    button.style.backgroundColor = 'rgb(0, 191, 255)';
    button.style.borderRadius = '50%';
  }
  if (event.target.classList.contains('literal')) {
    button = event.target;
    setTimeout(animationMouseDown, 150);
  } else if (!event.target.classList.contains('literal')) {
    button = document.getElementById(idElem);
    setTimeout(animationMouseDown, 150);
  }
});

divKeyboard.addEventListener('mouseup', (event) => {
  const idElem = event.target.id;
  let button;
  function animationMouseUp() {
    button.style.backgroundColor = 'lightslategrey';
    button.style.borderRadius = '10%';
  }
  if (event.target.classList.contains('literal')) {
    button = event.target;
    setTimeout(animationMouseUp, 250);
  } else if (!event.target.classList.contains('literal')) {
    button = document.getElementById(idElem);
    setTimeout(animationMouseUp, 250);
  }
});

divKeyboard.addEventListener('mouseover', (event) => {
  const idElem = event.target.id;
  let button;
  if (event.target.classList.contains('literal')) {
    button = event.target;
    button.style.backgroundColor = 'rgb(55, 55, 55)';
  } else if (!event.target.classList.contains('literal')) {
    button = document.getElementById(idElem);
    button.style.backgroundColor = 'rgb(55, 55, 55)';
  }
});

divKeyboard.addEventListener('mouseout', (event) => {
  const idElem = event.target.id;
  let button;
  if (event.target.classList.contains('literal')) {
    button = event.target;
    button.style.backgroundColor = 'lightslategrey';
  } else if (!event.target.classList.contains('literal')) {
    button = document.getElementById(idElem);
    button.style.backgroundColor = 'lightslategrey';
  }
});

divKeyboard.addEventListener('click', (event) => {
  const idElem = event.target.id;
  let button;
  if (event.target.classList.contains('literal')) {
    button = event.target;
    const key = event.target.value;
    const currentValue = textArea.value;
    textArea.value = currentValue + key;
  } else if (!event.target.classList.contains('literal')) {
    button = document.getElementById(idElem);
    const key = button.value;
    const currentValue = textArea.value;
    textArea.value = currentValue + key;
  }
});

document.body.addEventListener('click', (event) => {
  const idElem = event.target.id;
  const button = document.getElementById(idElem);
  if (button.id === 'id_8') {
    const currentValue = textArea.value;
    textArea.value = currentValue.slice(0, currentValue.length - 1);
  }
});

document.body.addEventListener('keydown', (event) => {
  const key = event.which;
  const idNum = `id_${key}`;
  const elem = document.getElementById(idNum);
  if (elem.id === 'id_20') {
    state.capsLock = true;
    state.upperCase = (state.upperCase + 1) % 2;
    const arrLiteral = Array.from(document.getElementsByClassName('literal'));
    arrLiteral.forEach((e, i) => {
      e.textContent = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
      e.value = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
    });
  }
});

divKeyboard.addEventListener('mouseup', (event) => {
  const idElem = event.target.id;
  const button = document.getElementById(idElem);
  if (button.id === 'id_20') {
    state.capsLock = true;
    state.upperCase = (state.upperCase + 1) % 2;
    const arrLiteral = Array.from(document.getElementsByClassName('literal'));
    arrLiteral.forEach((e, i) => {
      e.textContent = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
      e.value = arrLiteralObject[i].arrEventKeys[state.language * 2 + state.upperCase];
    });
  }
});

const divRowE = document.createElement('div');
divRowE.className = 'row_e';
divKeyboard.appendChild(divRowE);

for (let i = 0; i < 13; i += 1) {
  const button = document.createElement('button');
  button.className = 'literal';
  divRowE.appendChild(button);
}

const button8 = document.createElement('button');
button8.id = 'id_8';
button8.textContent = 'Backspace';
divRowE.appendChild(button8);

const divRowD = document.createElement('div');
divRowD.className = 'row_d';
divKeyboard.appendChild(divRowD);

const button9 = document.createElement('button');
button9.id = 'id_9';
button9.textContent = 'Tab';
button9.value = '        ';
divRowD.appendChild(button9);

for (let i = 0; i < 13; i += 1) {
  const button = document.createElement('button');
  button.className = 'literal';
  divRowD.appendChild(button);
}

const button46 = document.createElement('button');
button46.id = 'id_46';
button46.textContent = 'Delete';
divRowD.appendChild(button46);

const divRowC = document.createElement('div');
divRowC.className = 'row_c';
divKeyboard.appendChild(divRowC);

const button20 = document.createElement('button');
button20.id = 'id_20';
button20.textContent = 'CapsLock';
button20.value = '';
divRowC.appendChild(button20);

for (let i = 0; i < 11; i += 1) {
  const button = document.createElement('button');
  button.className = 'literal';
  divRowC.appendChild(button);
}

const button13 = document.createElement('button');
button13.id = 'id_13';
button13.textContent = 'Enter';
button13.value = '';
divRowC.appendChild(button13);

const divRowB = document.createElement('div');
divRowB.className = 'row_b';
divKeyboard.appendChild(divRowB);

const button16 = document.createElement('button');
button16.id = 'id_16';
button16.textContent = 'Shift';
button16.value = '';
divRowB.appendChild(button16);

for (let i = 0; i < 10; i += 1) {
  const button = document.createElement('button');
  button.className = 'literal';
  divRowB.appendChild(button);
}

const button38 = document.createElement('button');
button38.id = 'id_38';
button38.textContent = 'PgUp';
divRowB.appendChild(button38);

const button16Right = document.createElement('button');
button16Right.id = 'id_16_right';
button16Right.textContent = 'Shift';
button16Right.value = '';
divRowB.appendChild(button16Right);

const divRowA = document.createElement('div');
divRowA.className = 'row_a';
divKeyboard.appendChild(divRowA);

const button17 = document.createElement('button');
button17.id = 'id_17';
button17.textContent = 'Ctrl';
divRowA.appendChild(button17);

const button91 = document.createElement('button');
button91.id = 'id_91';
button91.textContent = 'Win';
button91.value = '';
divRowA.appendChild(button91);

const button18 = document.createElement('button');
button18.id = 'id_18';
button18.textContent = 'Alt';
divRowA.appendChild(button18);

const button32 = document.createElement('button');
button32.id = 'id_32';
button32.textContent = 'Space';
button32.value = ' ';
divRowA.appendChild(button32);

const button18Right = document.createElement('button');
button18Right.id = 'id_18_right';
button18Right.textContent = 'Alt';
divRowA.appendChild(button18Right);

const button37 = document.createElement('button');
button37.id = 'id_37';
button37.textContent = 'Home';
divRowA.appendChild(button37);

const button40 = document.createElement('button');
button40.id = 'id_40';
button40.textContent = 'PgDn';
divRowA.appendChild(button40);

const button39 = document.createElement('button');
button39.id = 'id_39';
button39.textContent = 'End';
divRowA.appendChild(button39);

const button17Right = document.createElement('button');
button17Right.id = 'id_17_right';
button17Right.textContent = 'Ctrl';
divRowA.appendChild(button17Right);

const arrLiteralButton = Array.from(document.getElementsByClassName('literal'));
arrLiteralButton.forEach((element, index) => {
  const button = element;
  if (arrLiteralObject[index]) {
    button.textContent = arrLiteralObject[index].arrEventKeys[state.language * 2];
    button.value = arrLiteralObject[index].arrEventKeys[state.language * 2];
  }
});
