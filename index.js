window.onload = function(){
	zoom(1920,1048)
	let shootBtn = document.getElementsByClassName('shoot')[0]
	let clearBtn = document.getElementsByClassName('clear')[0]
	shootBtn.onclick = function(){
		danmu()
	}
	clearBtn.onclick = function(){
		let danmuContain = document.getElementsByClassName('content')[0]
		danmuContain.innerHTML = ''
	}
}
window.onresize = function(){
	zoom(1920,1048)
};
function zoom(x,y){
	var width = 1920;
	var height = 1048;
	var x = window.innerWidth/width;
	var y = window.innerHeight/height;
	var body = document.getElementsByTagName('body')[0]
	body.style.webkitTransform= 'scale(' + x + ',' + y + ')'
	body.style.msTransform= 'scale(' + x + ',' + y + ')'
	body.style.mozTransform='scale(' + x + ',' + y + ')'
	body.style.oTransform='scale(' + x + ',' + y + ')'
	
}
function change(){
	console.log(1)
	let r = Math.floor(Math.random()*256)
	let g = Math.floor(Math.random()*256)
	let b = Math.floor(Math.random()*256)
	let changeBtn = document.getElementById('change')
	let btns = document.getElementsByTagName('button')
	let body = document.getElementsByTagName('body')[0]
	let top = document.getElementsByClassName('top')[0]
	let medium = document.getElementsByClassName('medium')[0]
	top.style.color = 'rgb('+r+','+g+','+b+')'
	medium.style.color = 'rgb('+r+','+g+','+b+')'
	body.style.color = 'rgb('+r+','+g+','+b+')'
	body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
	for(let i = 0;i<btns.length;i++){
		btns[i].style.backgroundColor = 'rgb('+r+','+g+','+b+')'
	}
	
}
function x(i){
	if(i==0){
		return 1
	}
	return i*x(i-1)
}
function textMove(){
	let inputs = document.getElementsByTagName('input')
	let labels = document.getElementsByTagName('label')
	for(let i = 0; i< inputs.length;i++){
		inputs[i].addEventListener('input', function(){
			if(inputs[i].value==''){
				let target = labels[i]
				target.style.fontSize = '30px'
				target.style.top = '44px'
				target.style.color = '#666' 
			}else{
				let target = labels[i]
				target.style.fontSize = '20px'
				target.style.top = '20px'
				target.style.color = '#722872'
			}
		})
	}
	let textAreas = document.getElementsByTagName('textArea')[0]
	textAreas.addEventListener('input', function(){
		if(textAreas.value==''){
			let target = labels[3]
			target.style.fontSize = '30px'
			target.style.top = '44px'
			target.style.color = '#666' 
		}else{
			let target = labels[3]
			target.style.fontSize = '20px'
			target.style.top = '20px'
			target.style.color = '#722872'
		}
	})
}
function BtnCheck(){
	let btns = document.getElementsByClassName('headBtn')
	for(let i = 0;i<btns.length;i++){
		btns[i].onclick = function(){
			let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[i].classList.add('checked')
		}
	}
}
/*window.onscroll = function(){
	let btns = document.getElementsByClassName('headBtn')
	let t = document.documentElement.scrollTop || document.body.scrollTop;
	let aboutT = document.getElementById('about').offsetTop
	let protofolidT = document.getElementById('products').offsetTop
	let contactT = document.getElementById('contact').offsetTop
	if(t<(protofolidT-10)){
    	let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[0].classList.add('checked')
	}
	if(t>(protofolidT-10)&&t<(contactT-10)){
		
		let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[1].classList.add('checked')
	}
	if(t>(contactT-10)){
		
		let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[2].classList.add('checked')
	}
}*/
function danmu(){
	console.log(11)
	let r = Math.floor(Math.random()*256)
	let g = Math.floor(Math.random()*256)
	let b = Math.floor(Math.random()*256)
	let shootBtn = document.getElementsByClassName('shoot')[0]
	let clearBtn = document.getElementsByClassName('clear')[0]
	let danmuContain = document.getElementsByClassName('content')[0]
	let content = document.getElementsByClassName('inputContent')[0].value
	document.getElementsByClassName('inputContent')[0].value = ''
	let danmuSpan = document.createElement('span')
	danmuSpan.className = 'danmuSpan'
	danmuSpan.style.top = Math.floor(Math.random()*(danmuContain.offsetHeight-10))+"px"
	danmuSpan.style.color = 'rgb('+r+','+g+','+b+')'
	danmuSpan.innerHTML = content
	danmuContain.appendChild(danmuSpan)
	setTimeout(function (){
		danmuContain.removeChild(danmuSpan)
	},4600)
}