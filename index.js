
function displayHidden() {
    const elements = document.querySelectorAll('.blog');

    elements.forEach((element) => {
    element.classList.remove('blog-hidden');
    });
  }

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function showMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      x.style.fontWeight = 600;
      x.style.textTransform = "uppercase";
      x.style.color = "#202020";
      x.style.textDecoration = "none";
    }
  }