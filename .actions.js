const slider = document.querySelector(".slider");
const img2 = document.querySelector(".img2");

slider.addEventListener("input",()=>{
let slideValue = slider.value;
img2.style.clipPath = `polygon(0 0, ${slideValue}% 0,
${slideValue}% 100%,0 100% )`;
})