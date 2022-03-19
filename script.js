//function for rgb color generating
function RGB(){
const x=Math.floor(Math.random()*255);
const y=Math.floor(Math.random()*255);
const z=Math.floor(Math.random()*255);
return `rgb(${x},${y},${z})`;
// return 'rgb('+x+','+y+','+z+')';
}
//event handelar in button
document.getElementById("btn").addEventListener('click',function(){
    const bgColor=RGB();
    document.body.style.backgroundColor=bgColor;
    document.getElementById("result").innerText=bgColor;


})
