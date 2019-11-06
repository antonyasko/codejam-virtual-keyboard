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
