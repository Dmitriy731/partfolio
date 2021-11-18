const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        closeOverlay = document.querySelector('.menu__overlay');

        
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
closeOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.work__percent_figure'),
      lines = document.querySelectorAll('.work__percent_line span');

counters.forEach( (item , i) => {
    lines[i].style.width = item.innerHTML;
});

const body = document.documentElement,
      sidepanel = document.querySelectorAll('.sidepanel path'),
      divider = document.querySelector('.sidepanel__divider');
      sidepanelText = document.querySelector('.sidepanel__text');

    window.addEventListener('scroll', () => {
        if (body.scrollTop >= 422) {
            sidepanel.forEach(item => {
                item.style.fill = 'black';
            });
            divider.style.background = 'black';
            sidepanelText.style.color = 'black';
        } else {
            sidepanel.forEach(item => {
                item.style.fill = 'white';
            });
            divider.style.background = 'white';
            sidepanelText.style.color = 'white';
        }
        console.dir(event);
    });