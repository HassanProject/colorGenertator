// Hex Colors
// Declear Variable
const colorsArray = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const Btn = document.querySelector('#Btn');
const Bgcolor = document.querySelector('.Bgcolor');


Btn.onclick = function(){
    let randomNumber = "#"
     for(i = 0; i < 6; i++){
         randomNumber += colorsArray[getColor()];
     }
    
    document.body.style.backgroundColor = randomNumber;
    Bgcolor.textContent = randomNumber;

    function getColor(){
         return  Math.floor(Math.random() * colorsArray.length);
    }
}