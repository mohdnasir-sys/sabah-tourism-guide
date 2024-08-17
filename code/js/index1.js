function toggleMenu() {
  const menu = document.getElementById("menu");
  const body = document.body;
  const searchIcon = document.querySelector(".search-icon");
  const searchBar = document.querySelector(".search-bar");

  if (menu) {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      body.classList.remove("no-scroll");
      if (searchIcon) searchIcon.style.display = "block"; // Show search icon when menu is closed
      if (searchBar) searchBar.classList.remove("show"); // Ensure search bar is not visible in full-screen menu
    } else {
      menu.classList.add("show");
      body.classList.add("no-scroll");
      if (searchIcon) searchIcon.style.display = "none"; // Hide search icon when menu is open
    }
  }
}

function toggleSearch() {
  const searchBar = document.querySelector(".search-bar");
  if (searchBar) {
    const isVisible = searchBar.classList.contains("show");
    if (isVisible) {
      searchBar.classList.remove("show");
    } else {
      searchBar.classList.add("show");
      searchBar.focus();
    }
  }
}

// Close the menu and search bar when clicking outside of the menu items or the menu icon
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");
  const searchIcon = document.querySelector(".search-icon");
  const searchBar = document.querySelector(".search-bar");

  let isClickInsideMenu = menuIcon && menuIcon.contains(event.target);
  const menuItems = menu
    ? menu.querySelectorAll("li a, .subscribe-btn, .login-btn")
    : [];
  menuItems.forEach((item) => {
    if (item.contains(event.target)) {
      isClickInsideMenu = true;
    }
  });
  if (searchIcon && searchIcon.contains(event.target)) {
    isClickInsideMenu = true;
  }
  if (searchBar && searchBar.contains(event.target)) {
    isClickInsideMenu = true;
  }

  if (!isClickInsideMenu) {
    if (menu) menu.classList.remove("show");
    if (searchBar) searchBar.classList.remove("show");
    document.body.classList.remove("no-scroll");
    if (searchIcon) searchIcon.style.display = "block"; // Ensure search icon is visible
  }
});

// Ensure that the toggleMenu function is attached to the menu icon after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-icon");
  const searchIcon = document.querySelector(".search-icon");

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

  if (searchIcon) {
    searchIcon.addEventListener("click", toggleSearch);
  }
});
