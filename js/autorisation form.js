const autorisation_popup=document.querySelector(".enter-link-btn");
const enterLink=document.querySelector(".enter-link");
const userMail=document.querySelector(".enter-email");
const userPassword=document.querySelector(".enter-pass");
const enterButton=document.querySelector(".enter-btn");

let StorageSupport=true;


try {
    storageMail=localStorage.getItem("email");
    storagePassword=localStorage.getItem("password");
}catch(err){
    StorageSupport=false;
}




autorisation_popup.addEventListener("submit", function(evt){
    
    if (!userMail.value || !userPassword.value){
    evt.preventDefault();s
   
    }
    else{
        
        if(StorageSupport){
            localStorage.setItem("email", userMail.value);
        localStorage.setItem("password", userPassword.value);
        
    }}}
    );