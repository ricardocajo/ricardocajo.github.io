var currentNavDiv = "about";

function changeNav(changeTo) {
    var newVisibleDiv = document.getElementById(changeTo);
    var oldVisibleDiv = document.getElementById(currentNavDiv);
    oldVisibleDiv.style.display = "none";
    newVisibleDiv.style.display = "block";
    currentNavDiv = changeTo;
  }


var currentLanguage = "english";

function changeLanguage(changeTo) {
    var newLanguage = document.getElementsByClassName(changeTo);
    var oldLanguage = document.getElementsByClassName(currentLanguage);
    for (var i = 0; i < oldLanguage.length; i++) {
        oldLanguage[i].style.display = "none";
    }
    for (var i = 0; i < newLanguage.length; i++) {
        newLanguage[i].style.display = "block";
    }
    currentLanguage = changeTo;
  }
  