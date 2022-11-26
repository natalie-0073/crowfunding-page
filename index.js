const bookmark=document.querySelector(".button-bookmark");
const bookmarkImg=document.querySelector(".button-bookmark__img");
const bookmarkText=document.querySelector(".button-bookmark__span");
const hamburger=document.querySelector(".menu-hamburger__img");
const dropdown=document.querySelector(".dropdown");
const btnBack=document.querySelector(".button-back");
const popup=document.querySelector(".popup");
const overlay=document.querySelector(".overlay");
const popupClose=document.querySelector(".popup-close");
const completed =document.querySelector(".completed");
const forms=document.querySelectorAll(".selected-info__form");
const gotIt=document.querySelector(".completed-container__btn");


gotIt.addEventListener('click', ()=>{
    overlay.style.display="none";
    completed.style.display="none";
})


forms.forEach((form)=>{
form.addEventListener('submit',(event)=>{
event.preventDefault();
popup.style.display="none";
completed.style.display="flex";
})
})

popupClose.addEventListener('click', ()=>{
    popup.style.display="none";
overlay.style.display="none";
})

btnBack.addEventListener('click', ()=>{
popup.style.display="flex";
overlay.style.display="block";
})

hamburger.addEventListener('click', ()=>{
    
        dropdown.classList.toggle('unactive');
        if(dropdown.classList.contains('unactive')){
            hamburger.src="src/images/icon-hamburger.svg";
        }
        else{
            hamburger.src="src/images/icon-close-menu.svg";
        }
    
})

bookmark.addEventListener('click', ()=>{
    bookmark.classList.toggle("bookmarked");
    bookmarkImg.classList.toggle("bookmarked--img");
    if(bookmarkText.innerHTML==="Bookmark"){
        bookmarkText.innerHTML="Bookmarked";
    }
    else{
        bookmarkText.innerHTML="Bookmark";
    }

})