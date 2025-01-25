const nextPage = document.getElementById('icon');
const welcomePage = document.getElementById('welcome-page');
const showcasePage = document.getElementById('showcase');
nextPage.addEventListener('click',()=>{
    welcomePage.style.display = 'none';
    showcasePage.style.display = 'block' 
});