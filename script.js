const images = document.querySelectorAll('.colors__choice');

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    images.forEach((img) => img.classList.remove('checked'));
    e.target.classList.add('checked');
  });
});
