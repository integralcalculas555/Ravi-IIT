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
<script>
  const modal = document.getElementById("examModal");
  const btn = document.getElementById("upcomingExamBtn");
  const span = document.getElementsByClassName("close")[0];

  // Button click par modal open hoga
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // 'X' par click karne par modal band hoga
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Modal ke bahar click karne par bhi band ho jayega
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>
