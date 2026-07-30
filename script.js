const chapters=document.querySelectorAll(".chapter-btn");

chapters.forEach(btn=>{

btn.onclick=function(){

const content=this.nextElementSibling;

if(content.style.display==="block")
content.style.display="none";
else
content.style.display="block";

}

});

const exercises=document.querySelectorAll(".exercise-btn");

exercises.forEach(btn=>{

btn.onclick=function(){

const content=this.nextElementSibling;

if(content.style.display==="block")
content.style.display="none";
else
content.style.display="block";

}

});