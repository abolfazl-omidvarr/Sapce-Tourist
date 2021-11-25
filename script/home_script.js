const body = document.body;
const circle = document.querySelector('.circle');
const innerCircle = document.querySelector('.inner-circle');

circle.addEventListener('mouseover', () =>
  innerCircle.classList.add('inner-circle-hover')
);
circle.addEventListener('mouseout', () =>
  innerCircle.classList.remove('inner-circle-hover')
);
circle.addEventListener('click', () => (location.href = 'destination.html'));
