`use strict`

const theme = document.querySelector(`#toggle-theme`);
function backgroundColor(e) {
    document.body.classList.toggle(`dark-theme`);
    console.log(document.body.classList)
}
theme.addEventListener(`click`, backgroundColor);

