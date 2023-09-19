const signupbtn = document.getElementById('signup')
const f_container = document.getElementById('firstcontainer')
const s_container = document.getElementById('secondcontainer')
const logbtn = document.getElementById('login-btn')
const signup_link = document.getElementById('signup-link')
const login_link = document.getElementById('login-link')
const close_btn = document.querySelector('.close-btn')
const clos_btn = document.querySelector('.clos-btn')


function show() {
    f_container.style.display = 'block';
    s_container.style.display= 'none';
    

}

function rshow() {
    s_container.style.display= 'block';
    f_container.style.display = 'none';

}
function close() {
    s_container.style.display= 'none';
    f_container.style.display = 'none';
    
}

signupbtn.addEventListener('click', show)
logbtn.addEventListener('click', rshow)
signup_link.addEventListener('click', show)
login_link.addEventListener('click', rshow)
close_btn.addEventListener('click', close)
clos_btn.addEventListener('click', close)
