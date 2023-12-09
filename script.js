const navMenue = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
console.log(navToggle)

navToggle.addEventListener('click', ()=>{
    navMenue.classList.add('show-menu')
})

navClose.addEventListener('click', ()=>{
    navMenue.classList.remove('show-menu');
})

const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchClose = document.getElementById('search-close');

searchBtn.addEventListener('click', ()=>{
    search.classList.add('show-search')
})

searchClose.addEventListener('click', ()=>{
    search.classList.remove('show-search');
})

const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')


loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})