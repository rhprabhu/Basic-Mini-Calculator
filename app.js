let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
let display_result=document.querySelector("#display_result");

add.addEventListener("click", function(){
    

   let num_1= parseInt(num1.value);
   let num_2= parseInt(num2.value);


   
    display_result.innerHTML=AddTwoNumbers(num_1,num_2);

})


sub.addEventListener("click", function(){
    

    let num_1= parseInt(num1.value);
    let num_2= parseInt(num2.value);
 
 
    
  
     display_result.innerHTML=SubTwoNumbers(num_1,num_2);
 
 })

 mul.addEventListener("click", function(){
    

    let num_1= parseInt(num1.value);
    let num_2= parseInt(num2.value);
 
 
    
  
     display_result.innerHTML=MulTwoNumbers(num_1,num_2);
 
 })

 div.addEventListener("click", function(){
    

    let num_1= parseInt(num1.value);
    let num_2= parseInt(num2.value);
 
 
    
  
     display_result.innerHTML=DivTwoNumbers(num_1,num_2);
 
 })
function AddTwoNumbers(a,b){

    let sum=a+b;
return sum;

}

function SubTwoNumbers(a,b){

    let diff=a-b;
return diff;

}

function MulTwoNumbers(a,b){

    let multi=a*b;
return multi;

}

function DivTwoNumbers(a,b){

    let divi=a/b;
return divi;

}


