let media = document.querySelector('.social_media');
let arrow = document.querySelector('.share_arrow');
let arrow_active = document.querySelector('.share_arrow_active');

arrow.addEventListener('click', () => {
  media.style.display = 'block';
});

arrow_active.addEventListener('click', () => {
  media.style.display = 'none';
});
