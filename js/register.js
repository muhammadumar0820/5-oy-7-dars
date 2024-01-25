import { validate, getData } from "./function.js";

const button = document.querySelector('#button');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const year = document.querySelector('#year');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const repassword = document.querySelector('#repassword');
const form = document.querySelector('#form')

button && button.addEventListener('click', function(e){
    e.preventDefault();

    if(validate({firstname, lastname, year, username, email, password, repassword})) {
        let users = {
            firstname: firstname.value,
            lastname: lastname.value,
            year: year.value,
            email: email.value,
            username: username.value,
            password: password.value,

        }
        let data = getData();
        data.push(users);
        localStorage.setItem('users', JSON.stringify(data));

        
        let currentUrl = window.location.href;
        let pageIndex = currentUrl.search('pages');
        const domain = currentUrl.substring(0, pageIndex);

        form.reset();

        window.location.assign('${domain}pages/login.html')
    }

})