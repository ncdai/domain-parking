function scaleText() {
  const scalable = document.querySelectorAll('.text-full-width');
  for (let i = 0; i < scalable.length; ++i) {
    scalable[i].style.transform = 'scale(1)';

    const scalableContainer = scalable[i].parentNode;
    const scalableContainerWidth = scalableContainer.offsetWidth;
    const scalableWidth = scalable[i].offsetWidth;

    scalable[i].style.transform = 'scale(' + scalableContainerWidth / scalableWidth + ')';
    scalableContainer.style.height = scalable[i].getBoundingClientRect().height + 'px';
  }
}

window.addEventListener('resize', scaleText);

document.fonts.ready.then(function () {
  scaleText();
  document.body.style.opacity = 1;
});
