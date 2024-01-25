import { validateLogin, getData } from "./function.js";

const button = document.querySelector('#button');
const password = document.querySelector('#password');
const username = document.querySelector('#username');
const form = document.querySelector('#form')

button && button.addEventListener('click', function(e){
    e.preventDefault();

    if(validateLogin({password, username})){
        let data = getData();
        let user = data.find(el => {
            return el.username == username.value
        })

        let currentUrl = window.location.href;
        let pageIndex = currentUrl.search('pages');
        const domain = currentUrl.substring(0, pageIndex);
        
        if(user && user.password == password.value){
            localStorage.setItem('currentUser', username.value);
            form.reset();
            window.location.assign('${domain}index.html');
        }else{
            alert('Login yoki parolda xatolik bor!')
        }
    }
})

password && password.addEventListener('keypress', function(e){
    if (e.key == 'Enter'){
        
    }
})