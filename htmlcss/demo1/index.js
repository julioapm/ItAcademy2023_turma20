'use strict';
const botao = document.querySelector('.btn');
botao.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const nomeClasseAtualBotao = document.body.className;
    if (nomeClasseAtualBotao === 'light-theme') {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }
});
