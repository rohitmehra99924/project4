const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const cursor = document.getElementById("cursor");
const circle = document.getElementById("circle");
const body = document.querySelector(".container");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

function pointer(event){
  var x,y;
  x = event.clientX;
  y = event.clientY;
  console.log(x+" "+y);
  circle.style.top=(y+window.scrollY)+"px" ;
  circle.style.left=(x+window.scrollX)+"px";
}

// data print========================================
const fnamep=document.getElementById("fnamep");
const lnamep=document.getElementById("lnamep");
const emailp=document.getElementById("emailp");

const data=()=>{
  const fname=document.getElementById("fname").value;
  fnamep.innerText = fname;


  const lname=document.getElementById("lname").value;
  lnamep.innerText = lname;


  const email=document.getElementById("email").value;
  emailp.innerText = email;



}
