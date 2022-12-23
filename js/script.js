// hello - Gesty Linaga

/*
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

// Random Ascii Signature
const sig = [
  `
               _       
   ___ ___ ___| |_ _ _ 
  | . | -_|_ -|  _| | |
  |_  |___|___|_| |_  |
  |___|         🏄|___|
  `,
  `
                     __         
  .-----.-----.-----|  |_.--.--.
  |  _  |  -__|__ --|   _|  |  |
  |___  |_____|_____|____|___  |
  |_____|              🏄|_____|
                                
                                
  `,
]
console.log(sig[Math.floor(Math.random() * sig.length)]);
