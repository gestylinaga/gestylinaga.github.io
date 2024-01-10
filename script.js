// gesty.dev 🤙
console.log("cowabunga");

const header = document.getElementById("header")
const navList = document.querySelector("#nav-list")
const navItems = navList.querySelectorAll("a")
const articleList = document.querySelectorAll("article")
const backLinks = document.querySelectorAll("#back")

function getLinkTo(link) {
  const linksTo = link.getAttribute("href")
  return linksTo.slice(1)
}

function showArticle(link) {
  const targetName = getLinkTo(link);
  const targetElement = document.getElementById(targetName);
  header.classList.add("hidden")
  articleList.forEach((article) => {
    article.classList.add("hidden")
  })
  targetElement.classList.remove("hidden");
}

function reset() {
  articleList.forEach((article) => {
    article.classList.add("hidden")
  })
  header.classList.remove("hidden")
}

function handleDirectLinks(locationHash) {
  const current = locationHash.slice(1)
  for (article of articleList) {
    const articleID = article.getAttribute("id")
    const targetArticle = document.getElementById(articleID)
    if (current === articleID) {
      reset();
      header.classList.add("hidden")
      targetArticle.classList.remove("hidden")
    } else if (current === "") {
      reset();
    }
  }
}

navItems.forEach((link) => {
  link.addEventListener("click", () => 
    showArticle(link)
  )
})

backLinks.forEach((link) => {
  link.addEventListener("click", () => {
    reset()
  })
})

window.addEventListener("hashchange", () => {
  handleDirectLinks(location.hash)
})

