let  teachBtn1 = document.querySelector('#teacher1-btn')
let  teachBtn3 = document.querySelector('#teacher3-btn')
let  teachStatus1 = document.querySelector('#teacher1-status');
let  teachStatus2 = document.querySelector('#teacher2-status');
let  teachStatus3 = document.querySelector('#teacher3-status');

teachBtn1.addEventListener('click',()=>{
    teachBtn1.innerText==='Book'?(teachBtn1.innerText='unbook'):teachBtn1.innerText='Book';
    teachBtn1.innerText==='Book'?(teachStatus1.style.backgroundColor='red'):teachStatus1.style.backgroundColor='green';
})

let  teachBtn2 = document.querySelector('#teacher2-btn')
teachBtn2.addEventListener('click',()=>{
    teachBtn2.innerText==='Book'?(teachBtn2.innerText='unbook'):teachBtn2.innerText='Book';
    teachBtn2.innerText==='Book'?(teachStatus2.style.backgroundColor='red'):teachStatus2.style.backgroundColor='green';
})

teachBtn3.addEventListener('click',()=>{
    teachBtn3.innerText==='Book'?(teachBtn3.innerText='unbook'):teachBtn3.innerText='Book';
    teachBtn3.innerText==='Book'?(teachStatus3.style.backgroundColor='red'):teachStatus3.style.backgroundColor='green';
})