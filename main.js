let humburger = document.querySelector('.humburger .menu');
let closeNav = document.getElementById('close');
let responsiveNav = document.querySelector('.responsiveNav');
let imgbox = document.querySelector('.imgbox img');
let content = document.querySelector('.content');
let overlay = document.querySelector('.overlay');
let next = document.querySelector('.icons span:nth-child(2)');
let pervious = document.querySelector('.icons span:first-child');
let imgslider = document.querySelectorAll('.imgslider img');
let iconsSlider = document.querySelectorAll('.icons span');
let addIcon = document.querySelector('.add .plus');
let minusIcon = document.querySelector('.add .minus');
let num = document.querySelector('.add span:nth-child(2)');
let cart = document.querySelector('.account :nth-child(2)');
let checkout = document.querySelector('.checkout');
let addBtn = document.querySelector('.btn button');
let numCart = document.querySelector('.numCart');
let numproCart = document.querySelector('.numPro');
let result = document.querySelector('.result');
let checkoutContent = document.querySelector('.containerCheckout');
let checkoutBtn = document.getElementById('checkout');
let found = document.querySelector('.found');
let notfound = document.querySelector('.notfound');
let trash = document.querySelector('.trash');
let images = document.querySelectorAll('.imgbox img');
let smallImages = document.querySelectorAll('.imgbox .smallImg img');

humburger.onclick = ()=>{
checkout.style.display='none'
imgbox.style.filter = 'brightness(0.6)'
content.style.filter = 'blur(0.9px)'
next.style.display = 'none'
responsiveNav.style.left = '0'
closeNav.onclick = ()=>{
responsiveNav.style.left = '-250px'
imgbox.style.filter = 'none'
content.style.filter = 'none'
next.style.display = 'inline'
}
}

let numPro = 0;

addIcon.onclick = ()=>{
if(numPro < 8){
numPro++;
}
num.innerHTML = numPro;
}

minusIcon.onclick = ()=>{
if(numPro>0){
numPro--;
}
num.innerHTML = numPro;
}

addBtn.onclick = ()=>{
showData();

}

cart.onclick = ()=>{
checkout.classList.toggle('toggleCheckout');
checkout.style.display='block'
}

function showData(){
numproCart.innerHTML = numPro;
result.innerHTML = `$${numPro*125}.00`;
numCart.innerHTML = numPro;
if(numPro > 0){
numCart.style.display = 'block'
found.style.display = 'flex'
notfound.style.display = 'none'
checkoutBtn.style.display = 'block'
}else{
numCart.style.display = 'none'
checkoutBtn.style.display = 'none'
found.style.display = 'none'
notfound.style.display = 'flex'
}
num.innerHTML = numPro;
}

trash.onclick = ()=>{
numPro--;
showData();
}

let imgs = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg']

next.onclick = ()=>{
images.forEach(img=>{
img.src=`images/${imgs[Math.floor(Math.random()*imgs.length)]}`
 })
}

pervious.onclick = ()=>{
images.forEach(img=>{
img.src=`images/${imgs[Math.floor(Math.random()*imgs.length)]}`
})   
}
smallImages.forEach((img,index)=>{
smallImages[0].addEventListener('click',()=>{
smallImages[0].classList.add('main');
imgbox.src = `images/${imgs[0]}`
smallImages[index].classList.remove('main')
})
smallImages[1].addEventListener('click',()=>{
smallImages[1].classList.add('main');
smallImages[index].classList.remove('main');
imgbox.src = `images/${imgs[1]}`
})
smallImages[2].addEventListener('click',()=>{
smallImages[2].classList.add('main');
imgbox.src = `images/${imgs[2]}`
smallImages[index].classList.remove('main')
})
smallImages[3].addEventListener('click',()=>{
smallImages[3].classList.add('main');
imgbox.src = `images/${imgs[3]}`
smallImages[index-1].classList.remove('main')

})
})













