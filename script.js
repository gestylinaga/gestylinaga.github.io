console.log("hello hello");

/* About Section Scroll:
  Using `IntersectionObserver` to check if section is in view aka being observed
  If a section is intersecting the observer, add class 'show'
  Otherwise it's 'hidden'
*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// hello - Gesty Linaga //
