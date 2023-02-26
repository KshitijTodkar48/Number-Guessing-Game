
let step = document.querySelector('.dynamic-number');
let message = document.getElementById('number-game-result')
let cnt=0 ;
let original_number = parseInt(Math.random()*100) ;
console.log(original_number);

function clickHandler(){
   cnt++ ;
   step.innerHTML = cnt ;
   let number_user = document.getElementById("num").value ;
   console.log(number_user) ;

if(number_user < original_number)
{
    message.innerHTML= "Try guessing a greater number."
}

else if(number_user > original_number)
{
    message.innerHTML= "Try guessing a smaller number."
}

else{
    message.innerHTML= "You guessed it right !!"
}
}


