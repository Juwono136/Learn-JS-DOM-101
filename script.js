// --- DOM Selection ---
// document.getElementById() -> element
// const title = document.getElementById("title");
// title.style.color = "red";
// title.style.backgroundColor = "#ccc";
// title.innerHTML = "Juwono";

// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "lightblue";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "This is from javascript";

// document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll("p");
// p[2].style.color = "red";

// Changing Node root
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "lightblue";

// ---------------------------------------------
// --- DOM Manipulation ---
// ==> Element Manipulation
// innerHTML
// const title = document.getElementById("title");
// title.innerHTML = "Juwono";

// element.setAttribute()
// const title = document.getElementsByTagName("h1")[0];
// title.setAttribute("name", "juwono");

// element.classList()
// const p2 = document.querySelector(".p2");
// p2.classList.add("label");
// p2.classList.replace("label", "label2");

// ==> Node Manipulation
// add new element using appendChild
// const newP = document.createElement("p");
// const newText = document.createTextNode("new paragraph");
// newP.appendChild(newText);

// const sectionA = document.getElementById("a");
// sectionA.appendChild(newP);

// add new element in the middle (insertBefore())
// const newLi = document.createElement("li");
// const newTextLi = document.createTextNode("new item");
// newLi.appendChild(newTextLi);

// const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");
// ul.insertBefore(newLi, li2);

// remove child and replace child
// const sectionA = document.getElementById("a");
// const link = document.getElementsByTagName("a")[0];
// sectionA.removeChild(link);

// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");

// const newH2 = document.createElement("h2");
// const textH2 = document.createTextNode("new H2");

// newH2.appendChild(textH2);
// sectionB.replaceChild(newH2, p4);

// ---------------------------------------------
// --- DOM Events ---
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const newLi = document.createElement("li");
  const textLi = document.createTextNode("new item from JS");
  newLi.appendChild(textLi);

  ul.appendChild(newLi);
});
