const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
const toggle = () => {
  if (theme.getAttribute("href") == "./css/custom-css/lightTheme.css") {
    theme.href = "./css/custom-css/darkTheme.css";
  } else {
    theme.href = "./css/custom-css/lightTheme.css";
  }
};
