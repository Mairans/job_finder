let offset = 0;
const sliderList = document.querySelector('.slider__container');

document.querySelector('.next').addEventListener('click', function() {
  offset += 500 ;
  if (offset > 3000) {
    offset = 0;
  }
  sliderList.style.left = -offset +'px';
});
document.querySelector('.prev').addEventListener('click', function() {
  offset -= 500 ;
  if (offset < 0) {
    offset = 3000;
  }
  sliderList.style.left = -offset +'px';
});