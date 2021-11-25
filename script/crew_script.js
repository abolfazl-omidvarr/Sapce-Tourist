const body = document.body;
const texts = document.querySelectorAll('.crew-text');
const imgs = document.querySelectorAll('.crew-img');
const dots = document.querySelectorAll('.dot');

let sldNum = 0;
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    dots.forEach(dot_ => {
      dot_.classList.remove('dot-active');
    });
    if (i === +dot.dataset.slide - 1) dot.classList.add('dot-active');
    sldNum = +dot.dataset.slide - 1;
    texts.forEach((text, i) => {
      console.log((i - sldNum) * 200);
      text.style.transform = `translate(${(i - sldNum) * 300}%)`;
    });
    imgs.forEach((imgs, i) => {
      console.log((i - sldNum) * 200);
      imgs.style.transform = `translate(${(i - sldNum) * 300 - 50}%)`;
    });
  });
});

window.addEventListener('resize', () => {});
