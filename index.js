

  const dropdown = document.getElementById("loanDropdown");
  const megaMenu = document.getElementById("megaMenu");
  let hideTimeout;

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    megaMenu.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      megaMenu.classList.remove("show");
    }, 500); // wait 500ms before hiding
  });

  