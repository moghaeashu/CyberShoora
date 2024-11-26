// Preloader
    // Simulate content loading
    setTimeout(() => {
        const loaderOverlay = document.getElementById('loader-overlay');
        loaderOverlay.classList.add('hidden');
    }, 3000); // 3000ms = 3 seconds; adjust this value as needed


    // Navbar Menu
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