const year = document.querySelector(".date");

// !select the date class and fill the innerHTML with the current year in the copyright footer.
function copyRightYear() {
  year.innerHTML = new Date().getFullYear() + ".";
}

copyRightYear();
