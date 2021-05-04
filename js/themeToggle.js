const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
const themeNavbar = document.querySelector("#theme-link-navbar");
// const toggleTheme = () => {
//   if (theme.getAttribute("href") == "./css/custom-css/lightTheme.css") {
//     theme.href = "./css/custom-css/darkTheme.css";
//     themeNavbar.href = "./css/custom-css/navbarDark.css";
//   } else {
//     theme.href = "./css/custom-css/lightTheme.css";
//     themeNavbar.href = "./css/custom-css/navbarLight.css";
//   }
// };
const toggleTheme = () => {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.getItem("theme") !== null) {
      if (localStorage.getItem("theme") == "light") {
        //document.getElementById("result").innerHTML = "Light Theme";
        localStorage.setItem("theme", "dark");
        theme.href = "./css/custom-css/darkTheme.css";
        themeNavbar.href = "./css/custom-css/navbarDark.css";
      } else {
        //document.getElementById("result").innerHTML = "Dark Theme";
        localStorage.setItem("theme", "light");
        theme.href = "./css/custom-css/lightTheme.css";
        themeNavbar.href = "./css/custom-css/navbarLight.css";
      }
    } else {
      localStorage.setItem("theme", "light");
      // document.getElementById("result").innerHTML = localStorage.getItem("theme");
    }
  } else {
    alert("Sorry, your browser does not support Web Storage...");
  }
};
const setThemeOnLoad = () => {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.getItem("theme") !== null) {
      if (localStorage.getItem("theme") == "light") {
        theme.href = "./css/custom-css/lightTheme.css";
        themeNavbar.href = "./css/custom-css/navbarLight.css";
      } else {
        theme.href = "./css/custom-css/darkTheme.css";
        themeNavbar.href = "./css/custom-css/navbarDark.css";
      }
    } else {
      localStorage.setItem("theme", "light");
      // document.getElementById("result").innerHTML = localStorage.getItem("theme");
    }
  } else {
    alert("Sorry, your browser does not support Web Storage...");
  }
}