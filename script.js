const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors =['red','yellow','green','black','blue'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){

	//bodyBg.style.backgroundColor='blue';
	let random = Math.floor(Math.random()*colors.length);
	bodyBg.style.backgroundColor=colors[random];
}