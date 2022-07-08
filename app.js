const mainFixed = document.querySelector('.mainFixed');
const topHead = document.querySelector(".topHead");
const teslaWeb = document.querySelector('#teslaWeb');
const contentTxt = document.querySelectorAll(".contentTxt");
const menu = document.querySelector('.nav-links');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const background = document.querySelectorAll('.blur');
const main = document.querySelector('main');
const imgs = document.querySelector('.model3');
const imgB = window.getComputedStyle(imgs, ':before');
const downBtn = document.querySelector('.downArr');
// move horizontal menu to vertical menu
const firstUl = document.querySelector(".firstUl"); // select the Ul1 from horizontal Nav
const firstNav = document.querySelector(".firstUl").querySelectorAll("li"); // select the liS from Ul1
const firstNavArr = Array.prototype.slice.call(firstNav).reverse(); //convert firstNav from NodeList to Array and reverse it (otherwise it moves with wrong order)
const secondUl = document.querySelector(".secondUl"); // selectt the Ul2 from horizontal Nav
const secondNav = document.querySelector(".secondUl").querySelectorAll("li"); // select the liS from Ul2
const secondNavArr = Array.prototype.slice.call(secondNav).reverse(); //convert firstNav from NodeList to Array and reverse it (otherwise it moves with wrong order)
const closed = menu.querySelector("ul"); // select the Ul from the Hidden Nav


// when open the hidden Menu
menuButton.addEventListener('click', function () {
  console.log("menu clicked");
  menu.style.transform = "translateX(0)";
  background.forEach(el => el.style.filter = "blur(5px) brightness(70%)");
  background.forEach(el => el.style.transition = "1s");
  imgs.style.setProperty('--menublur', 'blur(5px)');
  imgs.style.setProperty('--menubrightness', 'brightness(70%)');
  main.style.overflowY = "hidden";
  topHead.style.zIndex = "-1";
  teslaWeb.style.zIndex = "-1";
  contentTxt.forEach(content => content.style.zIndex = '-1');
  firstNav.forEach(firstLi => firstLi.style.zIndex = "-1");
  secondNav.forEach(secondLi => secondLi.style.zIndex = "-1");
  
});

// when close the hidden menu
closeButton.addEventListener('click', function () {
  console.log("close clicked");
  menu.style.transform = "translateX(105%)";
  background.forEach(el => el.style.filter = "blur(0)");
  imgs.style.setProperty('--menublur', 'blur(0)');
  imgs.style.setProperty('--menubrightness', 'brightness(1)');
  main.style.overflowY = "auto";
  topHead.style.zIndex = "";
  teslaWeb.style.zIndex = "";
  contentTxt.forEach(content => content.style.zIndex = "");
  firstNav.forEach(firstLi => firstLi.style.zIndex = "");
  secondNav.forEach(secondLi => secondLi.style.zIndex = "");
});


downBtn.addEventListener("click", myFunction);
// button Scrolling to modelY (a span as marker)
function myFunction() {
  location.href = "#modelYnav";
}

sal();


//WINDOW RESIZING
const ro = new ResizeObserver(entries => { //copy-paste, not fully understood
  for (const entry of entries) {
    const cr = entry.contentRect;
    const { width } = cr;
    console.log(width + 16.8125) //log the Width to the Console
    if ((width + 16.8125) < 1200) { //if the Width is LESS than 1200px
      secondNav.forEach(li => { // get every content from SecondNav and name it "li"
        li.classList.add('link'); // add to every "li" the class "link"
        closed.append(li); // move every "li" to the END (append) of the hidden (closed) menu
        menuButton.style.background = 'rgba(0, 0, 0, 0.05)';
      });
      firstNavArr.forEach(li => { // get every content from FirstdNav and name it "li"
        li.classList.add('link'); // add to every "li" the class "link"
        closed.prepend(li) // move every "li" to the START (prepend) of the hidden (closed) menu
      });
    } else { //if width MORE than 1200px
      secondNavArr.forEach(li => {
        li.classList.remove('link'); // remove the class "link"...
        secondUl.prepend(li); // ...and add them where they were 
      });
      firstNavArr.forEach(li => {
        li.classList.remove('link');
        firstUl.prepend(li);
      });
      menuButton.style.background = '';
    }
  }
});
ro.observe(document.querySelector('html'));