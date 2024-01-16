// gesty.dev 🤙
console.log("cowabunga");

const header = document.querySelector("#header");
const navList = document.querySelector("#nav-list");
const navItems = navList.querySelectorAll("a");
const articleList = document.querySelectorAll("article");
const backLinks = document.querySelectorAll("#back");

function getLinkTo(link) {
  const linksTo = link.getAttribute("href")
  return linksTo.slice(1);
}

/* "active" class list not working properly,
   problem might be in here somewhere.
*/
function showArticle(link) {
  const targetName = getLinkTo(link);
  const targetElement = document.getElementById(targetName);
  header.classList.add("hidden");
  header.classList.remove("active");
  articleList.forEach((article) => {
    article.classList.remove("active");
    article.classList.add("hidden");
  });
  targetElement.classList.remove("hidden");
  targetElement.classList.add("active");
}

function reset() {
  articleList.forEach((article) => {
    article.classList.add("hidden");
    article.classList.remove("active");
  })
  header.classList.remove("hidden");
  header.classList.add("active");
}

function handleDirectLinks(locationHash) {
  const current = locationHash.slice(1);
  for (let article of articleList) {
    const articleID = article.getAttribute("id");
    const targetArticle = document.getElementById(articleID);
    if (current === articleID) {
      reset();
      header.classList.add("hidden");
      targetArticle.classList.remove("hidden");
    } else if (current === "") {
      reset();
    }
  }
}

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    showArticle(link);
  })
})

backLinks.forEach((link) => {
  link.addEventListener("click", () => {
    reset();
  })
})

window.addEventListener("hashchange", () => {
  handleDirectLinks(location.hash)
})

window.addEventListener("load", () => {
  handleDirectLinks(location.hash)
})

// IntersectionObserver animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  })
})

const animateLeft = document.querySelectorAll(".animate-left");
animateLeft.forEach((el) => observer.observe(el))

const animateRight = document.querySelectorAll(".animate-right");
animateRight.forEach((el) => observer.observe(el))

const animateUp = document.querySelectorAll(".animate-up");
animateUp.forEach((el) => observer.observe(el))

const animateDown = document.querySelectorAll(".animate-down");
animateDown.forEach((el) => observer.observe(el))

