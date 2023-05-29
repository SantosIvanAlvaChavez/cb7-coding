const navItems = document.querySelectorAll(".navItem");

navItems.forEach(element => {
  element.addEventListener("click", () => {
    navItems.forEach(item => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});