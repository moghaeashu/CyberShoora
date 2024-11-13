function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }

  // Optional: Close menu when clicking outside
  window.onclick = function(event) {
    const menu = document.getElementById('dropdownMenu');
    const button = document.querySelector('.menu-button');
    if (event.target !== menu && event.target !== button) {
      menu.style.display = 'none';
    }
  };