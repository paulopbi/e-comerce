export default function copyRight() {
  const year = document.querySelector(".date");

  // !copyRightFunction - select the date class and fill the innerHTML with the current year in the copyright footer.
  function copyRightYear() {
    return (year.innerHTML = new Date().getFullYear() + ".");
  }

  copyRightYear();
}
