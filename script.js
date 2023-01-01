const element = document.querySelectorAll(".element")
// console.log(element)
let makeArr = Array.from(element)
// console.log(makeArr[0].style.width)

//Set Width
function setWidth() {
let setWidth =  Math.floor(Math.random()*150) + 'px'
  return setWidth 
}
//Set Height
function setHeight() {
let setHeight =  Math.floor(Math.random()*150) + 'px'
  return setHeight 
}
//Random colour 
function randomColor() {
let color = "#" + Math.floor(Math.random()*11256).toString(16)
  return color;
}
//for each element
element.forEach((ele) => {
  ele.addEventListener("mouseover", () => {
    ele.style.backgroundColor = randomColor()
    ele.style.width = setWidth()
    ele.style.height = setHeight()
    
  })
})
























// makeArr[0].addEventListener('mouseover', (() => {
// makeArr[0].style.width = '88px'
// makeArr[0].style.hight = '88px'

// }))
// makeArr[1].addEventListener('mouseover', (() => {
//   makeArr[1].style.width = '88px'
// makeArr[1].style.hight = '88px'
// }))
// makeArr[2].addEventListener('mouseover', (() => {
//   console.log(`${element} inside event 2`)
//     makeArr[2].style.width = '88px'
//     makeArr[2].style.hight = '88px'
// }))
// makeArr[3].addEventListener('mouseover', (() => {
//   console.log(`${element} inside event 3`)
//   makeArr[3].style.width = '88px'
// makeArr[3].style.hight = '88px'
// }))
// makeArr[4].addEventListener('mouseover', (() => {
//   console.log(`${element} inside event 4`)
//   makeArr[4].style.width = '88px'
// makeArr[4].style.hight = '88px'
// }))
