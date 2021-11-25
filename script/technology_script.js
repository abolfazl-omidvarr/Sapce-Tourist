const body = document.body;
const dots = document.querySelectorAll('.dot');
const imgs = document.querySelectorAll('.img');
const texts = document.querySelectorAll('.tech-text');
const bios = document.querySelectorAll('.bio');

const imgOrientation = function () {
  imgs.forEach(img => {
    const arr = img.children[0].getAttribute('src').split('-');
    arr[arr.length - 1] = 'landscape.jpg';
    img.children[0].setAttribute('src', arr.join('-'));
    console.log(img.children[0]);
  });
};

const bodyResize = function (dot = dots[0]) {
  const x = window.innerWidth;
  const y = window.innerHeight;

  const rangeSelect = function(range,int,elem){
    if (range) {
      const bodyHeight =
      elem.getBoundingClientRect().y +
        window.pageYOffset +
        elem.getBoundingClientRect().height +
        int;
      body.style.height = `${bodyHeight}px`;
    }
  } 

  const range1 = (x < 1050) & (x > 750) & (y < 1200);
  const range2 = (x < 750) & (x > 480) & (y < 980);
  const range3 =(x < 330)
  
  bios.forEach(bio => {
    rangeSelect(range1,70,bio)
    rangeSelect(range2,40,bio)
    rangeSelect(range3,30,bio)
  });
};

if (window.innerWidth < 1050) imgOrientation();

bodyResize();

window.addEventListener('resize', () => {
  if (window.innerWidth < 1050) imgOrientation();
  bodyResize();
});

dots.forEach(dot => {
  dot.addEventListener('click', e => {
    const transform = function (elements, x1, y1, x2, y2, dot) {
      elements.style.opacity = `0`;
      setTimeout(() => {
        elements.style.transform = `translate(${x1},${y1})`;
        if (dot.dataset.slide === elements.dataset.slide) {
          elements.style.transform = `translate(${x2},${y2}`;
          elements.style.opacity = `1`;
        }
      }, 200);
    };

    if (dot.classList.contains('dot-active')) return;

    dots.forEach(dot => dot.classList.remove('dot-active'));
    dot.classList.add('dot-active');

    imgs.forEach(img => transform(img, '1500px', '-50%', '0', '-50%', dot));

    texts.forEach(text => transform(text, '-1500px', '-50%', '0', '-50%', dot));
  });
  bodyResize();
});
