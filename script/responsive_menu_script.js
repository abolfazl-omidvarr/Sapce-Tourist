const body_ = document.body;
const nav = document.querySelector('nav');
const menuButt = document.querySelector('.nav-butt-resp');

nav.addEventListener('click', e => {
  e.stopPropagation();
});

const navTransit = function (bool, navLeft,bodyLeft, classAdd, classRem) {
  menuButt.dataset.show = bool;
  nav.style.left = navLeft;
  body_.style.left = bodyLeft
  menuButt.classList.add(classAdd);
  menuButt.classList.remove(classRem);
};

body_.style.left = '0%'

menuButt.addEventListener('click', e => {
  e.stopPropagation();
  if (menuButt.dataset.show === 'false')
    navTransit('true', '40%','-60%', 'nav-menu-open', 'nav-menu-close');
  else navTransit('false', '120%','0%', 'nav-menu-close', 'nav-menu-open');
});
body_.addEventListener('click', e => {
  if (menuButt.dataset.show === 'true')
    navTransit('false', '120%','0%', 'nav-menu-close', 'nav-menu-open');
});
