import { getData } from "./function.js";
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const year = document.querySelector('#year');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const button = document.querySelector('#logout');

document.addEventListener('DOMContentLoaded', function() {
    let currentUser = localStorage.getItem('curentUser');
    let currentUrl = window.location.href;
    let pageIndex = currentUrl.search('pages');
    const domain = currentUrl.substring(0, pageIndex);
    form.reset();

    if(currentUser){
        let users = getData();

        let user = user.find(el => {
            return el.username == currentUser
        })

        if(user){
            firstname.innerHTML = user.firstname;
            lastname.innerHTML = user.lastname;
            year.innerHTML = user.year;
            email.innerHTML = user.email;
            username.innerHTML = user.username;
            password.innerHTML = user.password;
        }else{
            window.location.assign('${domain}pages/login.html')
        }
    }else{
        window.location.assign('${domain}pages/login.html')
    }
})

let currentUrl = window.location.href;
let pageIndex = currentUrl.search('pages');
const domain = currentUrl.substring(0, pageIndex);
form.reset();

button && button.addEventListener('click', function(){
    localStorage.removeItem('currentUser');
    window.location.assign('${domain}pages/login.html')
})