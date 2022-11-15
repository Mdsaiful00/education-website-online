let userBox = document.querySelector('.user-box');
let userBtn = document.querySelector('#btn-user');
let searchForm = document.querySelector('.search-form');
let btnSearch = document.querySelector('#btn-search');
let btnBars = document.querySelector('#btn-bars');
let navBar = document.querySelector('.navbar');
btnBars.addEventListener('click', () => {
    btnBars.classList.toggle('fa-times');
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    userBox.classList.remove('active');
}
);
btnSearch.addEventListener('click', () => {
    btnSearch.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    userBox.classList.remove('active');
    navBar.classList.remove('active');

}
);
userBtn.addEventListener('click', () => {
    userBtn.classList.toggle('fa-times');
    userBox.classList.toggle('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}
);

let themebox = document.querySelector('.theme-box');
document.querySelector('.theme-setting').onclick = () =>{
    themebox.classList.toggle('active');
}
document.querySelectorAll('.theme-box  .color-btn').forEach(btn =>{

    btn.onclick = () =>{
        let color= btn.style.background;
        document.querySelector(':root').style.setProperty('--pink' , color);
    }
});



