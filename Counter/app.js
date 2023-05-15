//set initial count 0
let count=0;
//set the value and button
const value = document.querySelector("#value");

const btns =document.querySelectorAll(".btn");

btns.forEach( (btn)=>{
    btn.addEventListener('click',(e)=>{
     const style = e.currentTarget.classList;

     if(style.contains('decrease'))
     {
        count--;

     }
     else if(style.contains("increase"))
     {
        count++;
     }
     else{
        count=0;
     }

     if(count>0)
     {
        value.style.color="green";
     }
     else if(count<0){
        value.style.color="red";
     }
     else{
        value.style.color="#222";
     }
     value.textContent=count
    })
})