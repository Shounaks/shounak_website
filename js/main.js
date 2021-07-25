/**
 * @author Shounak Bhalerao
 * @description Toggles the CSS file that is loaded as well as stores it in Local Storage
 */

 const btn = document.querySelector(".btn-toggle");
 const theme = document.querySelector("#theme-link");
 const themeNavbar = document.querySelector("#theme-link-navbar");

 const toggleTheme = () => {
   if (typeof (Storage) !== "undefined") {
     if (localStorage.getItem("theme") !== null) {
       if (localStorage.getItem("theme") == "light") {
         //if light theme is loaded. SET DARK
         fadeOutWebPage();
         setTimeout(function(){
          localStorage.setItem("theme", "dark");
          theme.href = "./css/custom-css/darkTheme.css";
         },500);
         fadeInWebPage();
       } else {
         //if dark theme is loaded. SET LIGHT
         fadeOutWebPage();
         setTimeout(function(){
          localStorage.setItem("theme", "light");
          theme.href = "./css/custom-css/lightTheme.css";
         },500)
         fadeInWebPage();
       }
     } else {
       // If no theme is loaded for some EXTREMELY STRANGE reasons, set light
       localStorage.setItem("theme", "light");
     }
   } else {
     alert("Sorry, your browser does not support Web Storage...");
   }
 };
//<!-- =========================================================================================================================================== -->
const fadeInWebPage = () => {
  $(".webpage-body").fadeIn();
}
const fadeOutWebPage = () => {
  $(".webpage-body").fadeOut();
}

//<!-- =========================================================================================================================================== -->
 const setThemeOnLoad = () => {
   if (typeof (Storage) !== "undefined") {
     if (localStorage.getItem("theme") !== null) {
       if (localStorage.getItem("theme") == "light") {
         theme.href = "./css/custom-css/lightTheme.css";
       } else {
         theme.href = "./css/custom-css/darkTheme.css";
       }
     } else {
       localStorage.setItem("theme", "light");
       toggleTheme();
     }
   } else {
     alert("Sorry, your browser does not support Web Storage...");
   }
 }
//<!-- =========================================================================================================================================== -->
/**
 * @description Background Move Animation
 */
// $(document).ready(function() {
//     var movementStrength = 25;
//     var height = movementStrength / $(window).height();
//     var width = movementStrength / $(window).width();
//     $("body").mousemove(function(e){
//               var pageX = e.pageX - ($(window).width() / 2);
//               var pageY = e.pageY - ($(window).height() / 2);
//               var newvalueX = width * pageX * (-1);
//               var newvalueY = height * pageY * (-1);
//               $('.mypicture').css("object-position", newvalueX+"px     "+newvalueY+"px");
//     });
//     });