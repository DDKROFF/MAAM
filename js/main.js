const menuBtn = document.querySelector('.menu-btn');
const mobilemenu = document.querySelector('.mobile__menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('open');
    mobilemenu.classList.toggle('active');
});