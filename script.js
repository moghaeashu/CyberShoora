// Preloader
window.addEventListener("load", function () {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        preloader.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
    }, 3000); // 3000ms = 3 seconds; adjust this value to increase/decrease the delay
});

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