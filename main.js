const leftsidesubmit = document.querySelector("#left-side")
const name = document.querySelector(".name")
const surname = document.querySelector("surname")
const email = document.querySelector(".email")
const phone =document.querySelector(".phone")
const date = document.querySelector(".date")

//regex
const namee = /^[A-Za-z\-]{3,20}$/ // 3-20 herf sayi
const surnameregex = /^[A-Za-z\-]{4,20}$/ 
const emailrgx = /^\S{3,20}@\S{3,20}\.\S+$/
const number = /^[0-9+]{11,12}$/
const dateregex= /^[0-9/]{10}$/



//error msg
const namemsg = document.querySelector(".namemsg")
const surnamemsg = document.querySelector(".surnamemsg")
const mailmsg = document.querySelector(".mailmsg")
const phonemsg = document.querySelector (".phonemsg")
const datemsg = document.querySelector(".datemsg")



leftsidesubmit.addEventListener("submit",(event) => {
    event.preventDefault()
    // console.log("is working")

    if(namee.test(leftsidesubmit.name.value)){
        namemsg.classList.add("hidden")
        console.log("adi dogru daxil edib")
    }
    else{
        console.log("adi dogru daxil etmeyib")
        namemsg.classList.remove("hidden")
        name.setAttribute("style", "border:2px solid red")
    }

    if(surnameregex.test(leftsidesubmit.surname.value)){
        console.log("soyad dogru daxil edilib")
        surnamemsg.classList.add("hidden")
    }
    else{
        console.log("soyad dogru daxil edilmeyib")
        surnamemsg.classList.remove("hidden")
        surname.setAttribute("style", "border:2px solid red")
    }

    if(emailrgx.test(leftsidesubmit.mail.value)){
        console.log("mail dogru daxil edilib")
        mailmsg.classList.add("hidden")
    }
    else{
        console.log("mail adresi duzgun daxil edilmeyib")
        mailmsg.classList.remove("hidden")
        email.setAttribute("style","border:2px solid red")

    }

    if(number.test(leftsidesubmit.hasPointerCapture.value)){
        console.log("telefon dogru daxil edilib")
        phonemsg.classList.add("hidden")
    }
    else{
        phonemsg.classList.remove("hidden")
        console.log("telefon dogru daxil edilmeyib")
        phone.setAttribute("style","border:1px solid blue")
    }

    if(dateregex.test(leftsidesubmit.date.value)){
        console.log("tarix dogru daxil edilib")
        datemsg.classList.add("hidden")
    }
    else{
        console.log("tarix dogru daxil edilmeyib")
        datemsg.classList.remove("hidden")
        date.setAttribute("style","border:1px solid blue")
    }
})


const rightsidesubmit = document.querySelector("#right-side")
const old = document.querySelector(".oldpswrd")
const newps  =document.querySelector(".newps")
const renew = document.querySelector(".renew")
//regex

const pswrdregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
//error msg
const oldmsg =document.querySelector(".oldpsw")
const newmsg = document.querySelector(".newpsw")

rightsidesubmit.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log("is working")




    if (pswrdregex.test(rightsidesubmit.old.value)) {
        oldmsg.classList.add("hidden")
        old.setAttribute("style", "border:1px solid blue")
    }
    else{
        oldmsg.classList.remove("hidden")
        old.setAttribute("style", "border:2px solid red")
    }
    if(pswrdregex.test(newps.value)&&pswrdregex.test(renew.value)){
        newmsg.classList.add("hidden")
        newps.setAttribute("style", "border:2px solid green")
        renew.setAttribute("style", "border:2px solid green")
    }else{
        newmsg.classList.remove("hidden")
        newps.setAttribute("style", "border:2px solid red")
        renew.setAttribute("style", "border:2px solid red")
    
    }
})