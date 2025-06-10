// Declear Variable
const colors = ['green','cyan','blue','skyblue','yellow','red','pink','brown','purple','magenta','gray'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');


btn.onclick = function(){
    let randomNumber = colors[getColor()];
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;

    function getColor(){
      return  Math.floor(Math.random() * colors.length);
    } 
}


