// All Global Variables

// All Sections
const sections = document.querySelectorAll("section");
// ul navigation Bar
const navMenu = document.querySelector(".header .main-nav");
// Span id 3 dashs on mobile screen
const dash = document.querySelector("#dash");
// Header id to fixed navigation Bar
const navfixed = document.querySelector("#fixed");
// Button go to top Before header in HTML
const btn = document.querySelector("#btn");
// To transition between paragragh on landing
const links = document.querySelectorAll(".landing ul li");
// Three questions on landing
const par1 = document.querySelector("#par1");
const par2 = document.querySelector("#par2");
const par3 = document.querySelector("#par3");
// The paragragh that changing when select question
const paragragh = document.querySelector(".landing .text p");
// Section 2 content, All cards scrolling
const content = [...document.querySelectorAll(".content")];
// Button next
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
// Button previous
const preBtn = [...document.querySelectorAll(".pre-btn")];
// Section 3 All prices
const price = [...document.querySelectorAll(".price")];


//Add NavBar Dynamic
sections.forEach(function(section){
  const navlistElement = `<li class='menu__nav ${section.id}' data-nav=${section.id}><a href="#${section.id}">${section.dataset.nav}</li>`
  navMenu.insertAdjacentHTML('beforeend',navlistElement)
})



// REVIEW NAVBAR ON MOBILE 
dash.addEventListener("click", () => {
  if (navMenu.style.display == "block") {
    navMenu.style.display = "none"
  } else {
    navMenu.style.display = "block"
  }
})

// Active Section On Scroll:
const navli = document.querySelectorAll(".header .main-nav li");
const mainTitle = document.querySelectorAll("h1");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 122)) {
      current = section.getAttribute("id");
    }
  })
  
  
  navli.forEach(li => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  mainTitle.forEach(h1 => {
    h1.classList.remove("active");
    if (h1.classList.contains(current)) {
      h1.classList.add("active");
    }
  });
})


//Scroll Behavior Smooth
const linksSmooth = document.querySelectorAll(".header ul a");

for (const link of linksSmooth) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop0 = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop0,
    behavior: "smooth"
  });
}


//Fixed NavBar On Scroll:
onscroll = function () {
  //NavBar fixed & transition
  if (window.scrollY >= 15 && window.scrollY <= 100) {
    navfixed.style.cssText = `  
    width:100%;
    top:0;
    left:0;
    border-radius: 3px;   
    position: fixed;
    z-index:10;`
    //Show Button  
    btn.style.display = "block";
  }else if (window.scrollY <= 100) {
    navfixed.style.cssText = `  
    top:15px;
    border-radius: 50px;   
    position: absolute;`
    //disappear Button  
    btn.style.display = "none";
  }
}

//Button To Top
btn.onclick= function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
}

//Class Active Landing
links.forEach(li => {
  li.addEventListener("click", () => {
    restLinks();
    li.classList.add("active");
  })
})

function restLinks() {
  links.forEach(li => {
    li.classList.remove("active");
  })
}




par1.addEventListener("click", () => {
  paragragh.innerHTML = "Hello My Company Is Fantastic"
});

par2.addEventListener("click", () => {
  paragragh.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam"
});

par3.addEventListener("click", () => {
  paragragh.innerHTML = "Many Of Mission"
});


//Section 1 : 
//Select Elements button More Details
const btn01 = document.querySelector("#btn01")
const btn02 = document.querySelector("#btn02")
const btn03 = document.querySelector("#btn03")
const section_1 = document.querySelector("#section-1");


//Create Elements onClick button More Details
const parentDivSection1 = document.createElement("div");
const childDivSection1 = document.createElement("div");
const h2Section1 = document.createElement("h2");
const ulSecion1 = document.createElement("ul");
const liSectopn1Frist = document.createElement("li");
const liSection1Second = document.createElement("li");
const liSection1Three = document.createElement("li");
const imgSection1 = document.createElement("img");
const btnX = document.createElement("button")
const h2TextSection1 = document.createTextNode("Name Card");
const liSection1fText = document.createTextNode("The first requirement Card One");
const liSection1SText = document.createTextNode("The second requirement Card One");
const liSection1TText = document.createTextNode("The third requirement Card One");
const btnXText = document.createTextNode("X");

//Append TextNode
h2Section1.appendChild(h2TextSection1)
liSectopn1Frist.appendChild(liSection1fText)
liSection1Second.appendChild(liSection1SText)
liSection1Three.appendChild(liSection1TText)
btnX.appendChild(btnXText)

//Set Attributes
parentDivSection1.setAttribute("Class", "perant_div");
parentDivSection1.setAttribute("style", "display:none;");
parentDivSection1.setAttribute("id", "perant_div1");
childDivSection1.setAttribute("class", "second_div")
ulSecion1.setAttribute("clsss","card_ul")
imgSection1.setAttribute("src", "images/S1-1.jpg")
btnX.setAttribute("class", "btnX")

// Append Element
ulSecion1.appendChild(liSectopn1Frist);
ulSecion1.appendChild(liSection1Second);
ulSecion1.appendChild(liSection1Three);
childDivSection1.appendChild(h2Section1);
childDivSection1.appendChild(ulSecion1);
parentDivSection1.appendChild(btnX)
parentDivSection1.appendChild(childDivSection1);
parentDivSection1.appendChild(imgSection1);
section_1.appendChild(parentDivSection1);


// Onclick Only More Detalis Show And Remove Element
btn01.addEventListener("click", () => {
  imgSection1.setAttribute("src", "images/S1-1.jpg")
  if (parentDivSection1.style.display === "none") {
    parentDivSection1.style.cssText = `
    display: flex;
    background-color: #ef9322;
    `
  } else {
    parentDivSection1.style.display = "none"
  }
});
btn02.addEventListener("click", () => {
  liSectopn1Frist.innerHTML = "The first requirement Card Two";
  liSection1Second.innerHTML = "The second requirement Card Two";
  liSection1Three.innerHTML = "The third requirement Card Two";
  imgSection1.setAttribute("src", "images/S1-2.jpg")
  if (parentDivSection1.style.display === "none") {
    parentDivSection1.style.cssText = `
    display: flex;
    background-color: #f26b53;
    `
  } else {
    parentDivSection1.style.display = "none"
  }
});

btn03.addEventListener("click", () => {
  liSectopn1Frist.innerHTML = "The first requirement Card Three";
  liSection1Second.innerHTML = "The second requirement Card Three";
  liSection1Three.innerHTML = "The third requirement Card Three";
  imgSection1.setAttribute("src", "images/S1-3.jpg")
  if (parentDivSection1.style.display === "none") {
    parentDivSection1.style.cssText = `
    display: flex;
    background-color: #059bb5;
    `
  } else {
    parentDivSection1.style.display = "none"
  }
});

btnX.addEventListener("click", () => {
  parentDivSection1.style.display = "none"
})


//Section 2 :
// On Click Arrow Go Next Or previous
content.forEach((item, i) => {
  const contanierDimensions = item.getBoundingClientRect();
  const contanierWidth = contanierDimensions.width; 

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += contanierWidth; 
  })

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= contanierWidth; 
  })
}) 


//Section 3 :
//Price Change By Membership

//Normal Card
function onChangePriceNormal() {
  const normalCard = document.getElementById("normalCard");
  const normalIndex= normalCard.options[normalCard.selectedIndex].value;
  let p = " ";
  
  if (normalIndex == 1) {
    p = "$14";
  } else if (normalIndex == 2) {
    p = "$56";
  } else if (normalIndex == 3) {
    p = "$98";
  }
  price[0].innerHTML = p;
}

//Premium Card
function onChangePricePremium() {
  const premiumCard = document.getElementById("premiumCard");
  const premiumIndex= premiumCard.options[premiumCard.selectedIndex].value;
  let p = " ";

  if (premiumIndex == 4) {
    p = "$49";
  } else if (premiumIndex == 5) {
    p = "$196";
  } else if (premiumIndex == 6) {
    p = "$343";
  }
  price[1].innerHTML = p;
}

//Vip Card
function onChangePriceVip() {
  const vipCard = document.getElementById("vipCard");
  const vipIndex= vipCard.options[vipCard.selectedIndex].value;
  let p = " ";

  if (vipIndex == 7) {
    p = "$99";
  } else if (vipIndex == 8) {
    p = "$396";
  } else if (vipIndex == 9) {
    p = "$693";
  }
  price[2].innerHTML = p;
}