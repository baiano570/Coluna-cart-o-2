function toggleMenu(element) {
  const submenu = element.querySelector('.submenu');

  if (!submenu) return;

  const isVisible = submenu.style.display === 'block';

  // Fecha todos os menus antes
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.style.display = 'none';
  });

  // Abre somente o clicado
  submenu.style.display = isVisible ? 'none' : 'block';
}

// SISTEMA DO FOGUINHO

const hoje = new Date().toDateString();
const ultimoLogin = localStorage.getItem('ultimoLogin');

let dias = Number(localStorage.getItem('diasVivos')) || 0;

if (ultimoLogin !== hoje) {
  dias += 1;

  localStorage.setItem('diasVivos', dias);
  localStorage.setItem('ultimoLogin', hoje);
}

document.getElementById('diasVivos').innerText = dias;

// BOTÕES CLICÁVEIS

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {

    // efeito visual simples
    item.style.transform = 'scale(0.98)';

    setTimeout(() => {
      item.style.transform = 'scale(1)';
    }, 100);

    console.log('Botão clicado:', item.innerText);
  });
});

// BOTÕES INTERNOS

document.querySelectorAll('.submenu button').forEach(button => {
  button.addEventListener('click', (event) => {

    // impede conflito com menu
    event.stopPropagation();

    alert('Você clicou em: ' + button.innerText);
  });
});