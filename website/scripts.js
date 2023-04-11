function Copy() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied."
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function Show(){
    picture = document.getElementById("picture1").setAttribute("class","customimg1")
    text = document.getElementById("text1").setAttribute("class", "c1-centeredB")

}

function Hide(){
    picture = document.getElementById("picture1").setAttribute("class","default")
    text = document.getElementById("text1").setAttribute("class", "c1-centered")
}

const aboutBtn = document.getElementById('about-btn');
const faqBtn = document.getElementById('faq-btn');
const awardsBtn = document.getElementById('awards-btn');
const otherBtn = document.getElementById('other-btn');
const aboutText = document.getElementById('about-us-main');
const aboutTitle = document.getElementById('about-us-title');

if(aboutBtn){
aboutBtn.addEventListener('click', function() {
    console.log('About');
    aboutTitle.style.textAlign = "center"
    aboutTitle.innerHTML = `<h2 id="about-us-title">About VULPI GAMES</h2>`
    aboutText.innerHTML = `
    <h2 class="aboutus-text" id="about-us-main">
    <br>
    I'm a solo game developer passionate about creating immersive and fun experiences for players on various platforms, including mobile and PC.
    At Vulpi Games, I believe that gaming is more than just a pastime - it's a community. That's why I invite you to join our Discord community, where we can connect and share our love for gaming.
    As a solo developer, I handle all aspects of game development, from programming and design to art and sound. I'm dedicated to creating high-quality games that challenge and entertain players.
    <br><br>
    I'm constantly pushing myself to improve and innovate, and I'm excited to share my journey with you through behind-the-scenes content on my YouTube channel.
    Thank you for visiting Vulpi Games. I hope you enjoy playing my games as much as I enjoy creating them!
    </h2>
    `
    localStorage.setItem('LeftOn', `about`)
});
}

if(faqBtn){
faqBtn.addEventListener('click', function() {
    console.log('FAQ');
    aboutTitle.innerHTML = `<h2 id="about-us-title">FAQ - Frequently Asked Questions</h2>`
    aboutText.innerHTML = `
      <div id="faq" style="font-size:24px" id="about-us-main">
        <br>
        <div class="question">
          <h3>What is your game development process?</h3>
          <p>At Vulpi Games, I follow a development process that involves concept ideation, prototyping, alpha and beta testing, and final release.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>What platforms do you develop games for?</h3>
          <p>I develop games for various platforms, including mobile and PC.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>What inspired you to become a game developer?</h3>
          <p>I've always been passionate about gaming, and I wanted to create my own immersive and fun experiences for players to enjoy.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>What aspects of game development do you handle yourself?</h3>
          <p>As a solo developer, I handle all aspects of game development, from programming and design to art and sound.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>What challenges do you face as a solo game developer?</h3>
          <p>One of the biggest challenges is managing all aspects of game development by myself, from programming to art and sound design. It can be difficult to balance everything, but I'm dedicated to creating high-quality games.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>What motivates you to keep developing games?</h3>
          <p>I'm constantly pushing myself to improve and innovate as a game developer, and seeing players enjoy and appreciate my creations is incredibly rewarding.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>What do you think makes a great game?</h3>
          <p>A great game is one that engages and entertains players, with compelling gameplay, interesting characters and story, and immersive visuals and sound.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>Can I suggest game ideas or give feedback on your current games in the Vulpi community Discord?</h3>
          <p>Absolutely! I welcome all suggestions and feedback from the community. Feel free to share your ideas or thoughts in the appropriate channels and I'll do my best to respond and take them into consideration.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>Can I contribute to the development of your games?</h3>
          <p>At the moment, I am a solo developer and handle all aspects of game development myself. However, I appreciate all forms of support and welcome feedback, suggestions, and bug reports from the community. You can join my Discord server to share your thoughts and connect with other players.</p>
        </div>
        <p class="small-break"></p>
        <div class="question">
          <h3>How can I join the Vulpi Games Discord community?</h3>
          <p>You can join the Vulpi Games Discord community by clicking on the Discord icon on the Vulpi Games website or by following this <a href="https://discord.gg/csY3M3abuS" style="display: inline-block;">invite link</a></p>
        </div>
      </div>
    `;
    localStorage.setItem('LeftOn', `faq`)
  });
}

if(awardsBtn){
awardsBtn.addEventListener('click', function() {
    console.log('Awards');
    aboutTitle.innerHTML = `<h2 id="about-us-title">AWARDS</h2>`
    aboutText.innerHTML = `
    <div class="award-text" id="about-us-main">
    <br>
    This section is currently empty as we haven't received any awards yet. However, we are always striving to improve and create games that will earn recognition in the industry. Stay tuned for any updates on our progress!
    </div>
    `
    localStorage.setItem('LeftOn', `awards`)
});
}

if(otherBtn){
otherBtn.addEventListener('click', function() {
    console.log('Other');
    aboutTitle.innerHTML = `<h2 id="about-us-title">OTHER</h2>`
    aboutText.innerHTML = `
    <div style="text-align: center" id="about-us-main">
    <br>
    Let's wait and see what happens in the future.
    </div>
    `;
    localStorage.setItem('LeftOn', `other`)
});
}

// Define the title element
const title = document.getElementById("about-us-title");

// Save the state of a div when the user leaves the page
window.addEventListener('unload', function() {
  const div = document.getElementById("about-us-main");
  localStorage.setItem('myDivState', div.innerHTML);
  localStorage.setItem('myTitleState', title.innerHTML);
});

// Restore the state of the div when the user returns to the page
window.addEventListener('load', function() {
  const div = document.getElementById("about-us-main");
  const savedState = localStorage.getItem('myDivState');
  const savedTitleState = localStorage.getItem('myTitleState');
  if (savedState && savedTitleState) {
    if(div && title){
      div.innerHTML = savedState;
      title.innerHTML = savedTitleState;
    }
  }
});
