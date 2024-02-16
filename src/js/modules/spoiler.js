const spoiler = document.querySelector('.shipping');

spoiler.addEventListener('click', (e) => {
  const target = e.target.closest('.shipping__head');

  if (!target) return;

  target.classList.toggle('open');

  const content = target.nextElementSibling;

  if (!content.classList.contains('open')) {
    content.classList.add('open');
    content.style.maxHeight = `${content.scrollHeight}px`;
  } else {
    content.classList.remove('open');
    content.style.maxHeight = '';
  }
});
