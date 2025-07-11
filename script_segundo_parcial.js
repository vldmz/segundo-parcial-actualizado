const toggle = document.getElementById('darkModeToggle');
  const icon = document.getElementById('darkModeIcon');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambia el ícono según el modo
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
    } else {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
    }
  });




 