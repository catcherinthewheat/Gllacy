const feedback_on=document.querySelector(".feedback-btn");
const feedback_popup=document.querySelector(".feedback-form");
const feedback_off=feedback_popup.querySelector(".feedback-close");
const userLogin=document.querySelector(".feedback-form-login");
const userEmail=document.querySelector(".feedback-form-email");
const textUser=document.querySelector(".feedback-form-text");
const modalbackground=document.querySelector(".modal-window-background");


let isStorageSupport=true;
let storage="";

try {
    storageLogin=localStorage.getItem("login");
    storageEmail=localStorage.getItem("email");
}catch(err){
    isStorageSupport=false;
}

feedback_on.addEventListener("click", function(evt){
evt.preventDefault();
feedback_popup.classList.add("animation-bounce");
feedback_popup.classList.add("form-visible");
modalbackground.classList.add("form-visible");


if(storageLogin && storageEmail){
    userLogin.value=storageLogin;
    userEmail.value=storageEmail;
    textUser.focus();
}
else{
   userLogin.focus();
}
});

feedback_off.addEventListener("click", function(){
    feedback_popup.classList.remove("form-visible");
    feedback_popup.classList.remove("animation-shake");
    modalbackground.classList.remove("form-visible");
});

feedback_popup.addEventListener("submit", function(evt){
if (!userLogin.value || !userEmail.value || !textUser.value){
evt.preventDefault();
feedback_popup.classList.remove("animation-shake");
feedback_popup.offsetWidth=feedback_popup.offsetWidth;
feedback_popup.classList.add("animation-shake");
}
else{
    if(isStorageSupport){
    localStorage.setItem("login", userLogin.value);
    localStorage.setItem("email", userEmail.value);
}}}
);


