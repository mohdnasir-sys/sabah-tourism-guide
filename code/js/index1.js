function toggleMenu() {
  const menu = document.getElementById("menu");
  const body = document.body;

  if (menu) {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      body.classList.remove("no-scroll");
    } else {
      menu.classList.add("show");
      body.classList.add("no-scroll");
    }
  }
}

// Close the menu when clicking outside of the menu items or the menu icon
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");

  let isClickInsideMenu = menuIcon && menuIcon.contains(event.target);
  const menuItems = menu
    ? menu.querySelectorAll("li a, .subscribe-btn, .login-btn")
    : [];
  menuItems.forEach((item) => {
    if (item.contains(event.target)) {
      isClickInsideMenu = true;
    }
  });

  if (!isClickInsideMenu) {
    if (menu) menu.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});

// Ensure that the toggleMenu function is attached to the menu icon after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-icon");

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }
});
