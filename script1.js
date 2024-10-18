let navHome = document.querySelector('#nav-home')
let navBooking = document.querySelector('#nav-booking')
let navContact = document.querySelector('#nav-contact')
let home = document.querySelector('#home')
let booking = document.querySelector('#booking')
let contact = document.querySelector('#contact')

navHome.addEventListener('click',()=>{
    home.style.display='inline';
    booking.style.display='none';
    contact.style.display='none';
})

navBooking.addEventListener('click',()=>{
    home.style.display='none';
    booking.style.display='inline';
    contact.style.display='none';
})

navContact.addEventListener('click',()=>{
    home.style.display='none';
    booking.style.display='none';
    contact.style.display='inline';
})