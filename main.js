  const toggleButton = document.querySelector('.hamburger-btn'); 
  const navMenu = document.querySelector('.mobile-nav'); 

  toggleButton.addEventListener('click', (e) => {
    navMenu.classList.toggle('hidden');
    e.stopPropagation(); 
  });

  document.addEventListener('click', () => {
    if (!navMenu.classList.contains('hidden')) {
      navMenu.classList.add('hidden');
    }
  });

  navMenu.addEventListener('click', (e) => {
    e.stopPropagation(); 
  });
