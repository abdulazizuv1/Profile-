const nav_right = document.querySelector(".nav_right");
const body = document.querySelector("body");
const textChange = document.querySelector(".nav_right");

const mode = ()=>{
  let isLight = localStorage.getItem("mode") ? localStorage.getItem("mode") : "true"
  if(isLight == "true"){
    body.classList.add("active");
    textChange.textContent = "LIGHT"
  }else{
    body.classList.remove("active");
    textChange.textContent = "DARK"
  }
}
nav_right.addEventListener("click", ()=>{
  if(localStorage.getItem("mode") == "true"){
    localStorage.setItem("mode", false)
  }else{
    localStorage.setItem("mode", true)
  }
  mode()
})
mode()