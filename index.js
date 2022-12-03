
function displayHidden() {
    const elements = document.querySelectorAll('.blog');

    elements.forEach((element) => {
    element.classList.remove('blog-hidden');
    });
  }

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function showMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      x.style.flexDirection = "column";
      x.style.backgroundColor = "#202020";
      x.style.margin = "0 auto"; 
    }
  }