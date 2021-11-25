const body = document.body;
const plntNav = document.querySelectorAll('.article-nav-butt');
const plntImg = document.querySelectorAll('.plnt-img');
const info = document.querySelectorAll('.info');

const addRemoveClass = function (
  /*add and remove active and hover class for planet navs*/
  _butt,
  rClass,
  aClass,
  color = 'var(--white)'
) {
  _butt.classList.remove(rClass);
  _butt.classList.add(aClass);
  _butt.style.color = color;
};

const transform = function (elem, x, y, opacity, scale = 1) {
  /*function for transforming planet img and info*/
  elem.style.transform = `translate(${x}, ${y}) scale(${scale})`;
  elem.style.opacity = `${opacity}`;
};

const bodyResize = function (y = 30) {
  /*resizing body in different situation*/
  const range1 =
    (window.innerHeight < 1200) &
    (window.innerHeight > 1000) &
    (window.innerWidth < 770)
      ? 1
      : 0;
  const range2 =
    (window.innerHeight < 1000) &
    (window.innerHeight > 900) &
    (window.innerWidth <= 480)
      ? 1
      : 0;
  const range3 = window.innerWidth > 1050;
  if (range1 | range2 | range3) body.style.height = '100vh';
  else if (window.innerHeight < 1200) {
    info.forEach(inf => {
      if (inf.getAttribute('active') === 'true') {
        bodyHeightInitiative =
          inf.childNodes[5].getBoundingClientRect().y +
          window.pageYOffset +
          inf.childNodes[5].getBoundingClientRect().height +
          y;
      }
    });
    body.style.height = `${bodyHeightInitiative}px`;
  } else body.style.height = null;
};

let bodyHeightInitiative; /*for responsive body height*/
let plntCode; /*code of img and info elements*/

bodyResize();



plntNav.forEach(butt => {
  butt.addEventListener('click', e => {
    e.preventDefault();

    plntCode = e.target.dataset.plnt;
    let scale = [1, 1];

    /*scale of img and info in different dimension*/
    if (window.innerWidth <= 480) scale = [0.6, 0.85];
    else if (window.innerWidth < 780) scale = [0.75, 0.9];
    else if (window.innerWidth <= 1500) scale = [0.9, 0.9];

    if (butt.classList.contains('article-nav-butt-active')) return;

    plntNav.forEach(butt_ =>
      addRemoveClass(
        butt_,
        'article-nav-butt-active',
        'article-nav-butt-hover',
        'var(--white)'
      )
    );

    addRemoveClass(
      butt,
      'article-nav-butt-hover',
      'article-nav-butt-active',
      'var(--light)'
    );

    plntImg.forEach(img => {
      if (window.innerWidth <= 480) transform(img, '-50%', '-50%', 0, 0.4);
      else if (window.innerWidth <= 1050)
        transform(img, '-50%', '-50%', 0, 0.5);
      else transform(img, '-50%', '0%', 0, 0.6);

      setTimeout(() => {
        if (img.dataset.plnt == plntCode) {
          if (window.innerWidth < 1050)
            transform(img, '-50%', '-50%', 1, scale[0]);
          else transform(img, `-50%`, `10%`, 1, scale[0]);
        }
      }, 300);
    });

    info.forEach(inf => {
      transform(inf, '0%', '0%', 0, 0.5);
      inf.setAttribute('active', 'false');

      if (inf.dataset.plnt == plntCode) {
        inf.setAttribute('active', 'true');
        setTimeout(() => {
          transform(inf, '0%', '0%', 1, scale[1]);
        }, 300);
      }
    });

    bodyResize(110);
  });
});


window.addEventListener('resize', e => {
  plntImg.forEach(img => {
    if (img.dataset.plnt == plntCode) {
      if (window.innerWidth <= 480) transform(img, '-50%', '-50%', 1, 0.6);
      else if (window.innerWidth <= 780)
        transform(img, '-50%', '-50%', 1, 0.75);
      else if (window.innerWidth <= 1050)
        transform(img, '-50%', '-50%', 1, 0.9);
      else transform(img, '-50%', '10%', 1, 0.9);
    }
  });
  bodyResize();
});
