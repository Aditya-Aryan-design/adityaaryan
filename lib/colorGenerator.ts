// color constant to generate color
const colorArray = [
    '5','6','7','8','9','a','b','c','d','e','f'
  ]

  // function to generate random colors
export default ()=>{
    return `#${colorArray[Math.round(Math.random()*10)]}${colorArray[Math.round(Math.random()*10)]}${colorArray[Math.round(Math.random()*10)]}`
}