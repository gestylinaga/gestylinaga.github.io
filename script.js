// hello - Gesty Linaga
const sig = [`
  ╔═╗┌─┐┌─┐┌┬┐┬ ┬  ╦  ┬┌┐┌┌─┐┌─┐┌─┐
  ║ ╦├┤ └─┐ │ └┬┘  ║  ││││├─┤│ ┬├─┤
  ╚═╝└─┘└─┘ ┴  ┴   ╩═╝┴┘└┘┴ ┴└─┘┴ ┴
  `,
    `
    ▄████  ██▓    
   ██▒ ▀█▒▓██▒    
  ▒██░▄▄▄░▒██░    
  ░▓█  ██▓▒██░    
  ░▒▓███▀▒░██████▒
   ░▒   ▒ ░ ▒░▓  ░
    ░   ░ ░ ░ ▒  ░
  ░ ░   ░   ░ ░   
        ░     ░  ░
  `,
  `
               _       
   ___ ___ ___| |_ _ _ 
  | . | -_|_ -|  _| | |
  |_  |___|___|_| |_  |
  |___|           |___|
  `,
  `
                           888             
                           888             
                           888             
 .d88b.   .d88b.  .d8888b  888888 888  888 
d88P"88b d8P  Y8b 88K      888    888  888 
888  888 88888888 "Y8888b. 888    888  888 
Y88b 888 Y8b.          X88 Y88b.  Y88b 888 
 "Y88888  "Y8888   88888P'  "Y888  "Y88888 
     888                               888 
Y8b d88P                          Y8b d88P 
 "Y88P"                            "Y88P"  
  `,
  `
                     __             ___    __                         
  .-----.-----.-----|  |_.--.--.   |   |  |__.-----.---.-.-----.---.-.
  |  _  |  -__|__ --|   _|  |  |   |.  |  |  |     |  _  |  _  |  _  |
  |___  |_____|_____|____|___  |   |.  |__|__|__|__|___._|___  |___._|
  |_____|                |_____|   |:. |   |             |_____|      
                                   |::.. . |                          
                                   '-------'                          
  `,
]
//random choice of ascii signature
console.log(sig[Math.floor(Math.random() * sig.length)])


// Contact Form Popup Box
function openContactBox() {
  document.getElementById("contactForm").style.display = "block";
}

function closeContactBox() {
  document.getElementById("contactForm").style.display = "none";
}
