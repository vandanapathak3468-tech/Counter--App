let element=document.querySelector("h1");
let count=0;

let plusButton = document.querySelector(".plus");
plusButton.addEventListener("click" , function(){
count ++
element.innerHTML= count;
})



let minusButton =document.querySelector(".minus");
minusButton.addEventListener("click", function(){
    count  --
    element.innerHTML=count;
});

let resetButton=document.querySelector(".reset");
resetButton.addEventListener("click" , function() {
 count=0
 element.innerHTML=0;
})