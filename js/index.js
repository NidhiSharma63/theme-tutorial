import {
    addHoverEffect
} from './btns.style.js';

import {
    getValue,
    Action
} from './get-value.js';

import{
    moveCircle,
} from './theme.js';

const btns = document.querySelectorAll('.btn');
const result = document.querySelector(".result");
const onBtn = document.getElementById("on-btn");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const circle = document.querySelector('.circle');
const themeLink = document.querySelector('.themeLink')
let on = false;
onBtn.addEventListener("click", () => {
    on = true;
    result.innerHTML = ''
    addHoverEffect(btns);
    getValue(btns, result);
}, {
    once: true
});
clear.addEventListener("click", () => {
    if (on) {
        result.innerHTML = ''
    }
});
equal.addEventListener('click', () => {
    if (on) {
        Action()
    }
});

moveCircle(circle,themeLink);