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

//Scroll down to second section
document.getElementById("scrollbtn").addEventListener("click", function () {
  const secondSection = document.getElementById("secondSection");
  secondSection.scrollIntoView({ behavior: "smooth" });
});

// Scroll Top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
