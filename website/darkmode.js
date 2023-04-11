const themeBtn = document.getElementById('themeBtn')

function getCurrentTheme(){
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.getItem('Vulpi.theme') ? theme = localStorage.getItem('Vulpi.theme') : null;
    return theme;
  }

function loadTheme(theme){
    const root = document.querySelector(':root');
  if (document.location.pathname === '/' || document.location.pathname.indexOf('index') >-1 ) {
    if(theme==="dark"){
      document.getElementById("themeBtn").setAttribute("src", "website/lightOn.svg")
    }
    else if(theme === "light"){
      document.getElementById("themeBtn").setAttribute("src", "website/lightOff.svg")
    }
  } else{
    if(theme==="dark"){
      document.getElementById("themeBtn").setAttribute("src", "lightOn.svg")
    }
    else if(theme === "light"){
      document.getElementById("themeBtn").setAttribute("src", "lightOff.svg")
    }
  }
  root.setAttribute('color-scheme', `${theme}`);
}

if(themeBtn){
themeBtn.addEventListener('click', () => {
    let theme = getCurrentTheme();
    let audio;
    if(theme === 'dark'){
      audio = document.getElementById('lightsOn');
      theme = 'light';
    } else {
      audio = document.getElementById('lightsOff');
      theme = 'dark';
    }
    audio.currentTime = 0;
    audio.play();
    localStorage.setItem('Vulpi.theme', `${theme}`)
    
    loadTheme(theme);
})
}else{
    console.log("The button doesn't exist / js doesnt see it")
}

window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme())
})