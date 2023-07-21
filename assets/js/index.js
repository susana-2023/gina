const getDate = (decreaseOn = 0) => {
  const date = new Date(Date.now() - (decreaseOn * 86.4e6));
  const dayDate = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return `${dayDate}.${month}.${year}`;
};

const beforeYesterdayEl = document.querySelector('.before-yeasterday');
const todayEl = document.querySelector('.today');
const yearEl = document.querySelector('.year');

todayEl.innerHTML = getDate();
beforeYesterdayEl.innerHTML = getDate(2);
yearEl.innerHTML = new Date().getFullYear();

const click = () => {
  window.open('https://priallysearly.com/click');
};

const icons = document.querySelectorAll('i');
const images = document.querySelectorAll('img');
const navLinks = document.querySelectorAll('.pre-content__row div');

navLinks.forEach(item => {
  item.addEventListener('click', click)
});

icons.forEach(item => {
  item.addEventListener('click', click)
});

images.forEach(item => {
  item.addEventListener('click', click)
});
