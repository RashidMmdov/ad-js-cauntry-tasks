let links = document.querySelectorAll(".a")
let card = document.querySelectorAll(".card")

let lastItem;

links.forEach(function(lnk) {
    lnk.addEventListener("click", openTabs);
 });


function openTabs(val) {
   var lnkTarget = val.currentTarget;
   var country = btnTarget.dataset.country;

   card.forEach(function(val) {
    
    val.classList.remove("active");
   });
   links.forEach(function(el) {
    el.classList.remove("active");
 });

 document.querySelector("#" + country).classList.add("active");
 
 btnTarget.classList.add("active");
}