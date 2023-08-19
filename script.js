const tabLinks = document.querySelectorAll('.tab-link');
const allContent = document.querySelectorAll('.tab-content');
const tabsContainer = document.querySelector('.tab-links');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target;

  //Se clicar no lugar errado, ele retorna
  if (!clicked) return;
  tabLinks.forEach((e) => e.classList.remove('active'));
  clicked.classList.add('active');

  // Trocar o conteúdo do container
  const filter = e.target.dataset.filter;
  allContent.forEach((content) => {
    if (content.classList.contains(filter)) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
