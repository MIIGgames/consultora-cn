// Obtém o elemento do menu
const menu = document.querySelector('.menu');

// Obtém todos os elementos nav-link
const navLinks = document.querySelectorAll('.nav-link');

// Obtém todos os elementos dropdown-content
const dropdownContents = document.querySelectorAll('.dropdown-content');

// Função para fechar todos os dropdowns
function closeAllDropdowns() {
  dropdownContents.forEach(content => {
    content.classList.remove('active');
  });
}

// Ouvinte de evento para fechar todos os dropdowns quando o usuário mover o mouse para longe do menu
menu.addEventListener('mouseleave', closeAllDropdowns);

// Para cada nav-link, adiciona ouvintes de eventos de clique e mouseenter
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdownContent = link.nextElementSibling;

    if (dropdownContent.classList.contains('active')) {
      dropdownContent.classList.remove('active');
    } else {
      closeAllDropdowns();
      dropdownContent.classList.add('active');
    }
  });

  link.addEventListener('mouseenter', () => {
    const dropdownContent = link.nextElementSibling;
    closeAllDropdowns();
    dropdownContent.classList.add('active');
  });
});


// Adicione a função JavaScript para controlar o menu mobile
document.querySelector('.ph-list').addEventListener('click', function() {
  var categorias = document.querySelector('.categorias');
  categorias.style.display = (categorias.style.display === 'block') ? 'none' : 'block';
});
