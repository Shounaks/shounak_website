const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
const themeNavbar = document.querySelector("#theme-link-navbar");
const toggle = () => {
  if (theme.getAttribute("href") == "./css/custom-css/lightTheme.css") {
    theme.href = "./css/custom-css/darkTheme.css";
    themeNavbar.href = "./css/custom-css/navbarDark.css";
  } else {
    theme.href = "./css/custom-css/lightTheme.css";
    themeNavbar.href = "./css/custom-css/navbarLight.css";
  }
};
