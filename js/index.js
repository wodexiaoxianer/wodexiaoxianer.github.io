var speed=0;
//让草地动起来
var bottom = document.querySelector('.bottom');
var timer = setInterval(function(){
	bottom.style.left = bottom.offsetLeft - 1 + 'px';
	if(bottom.offsetLeft < -343){
		bottom.style.left = 0;
	}
},10)

var wrap = document.querySelector('.wrap');
var score = document.querySelector('.score');
var content = document.querySelector('.content');
var start = document.querySelector('.start');
var bottom = document.querySelector('.bottom');
var pillarArr = [];//存放柱子的数组
//点击开始进入游戏界面
start.onclick = function(){
	content.style.display = 'none';
	start.style.display = 'none';
	birdFn();
	pillarFn();
	createP();
}

//随机数函数
function randFn(a,b){
	Num = Math.floor(Math.random() * (b - a + 1) + a);
	return Num;
}

//小鸟落体
function birdFn(){
	var bird = document.createElement('div');
	bird.className = 'bird';
	wrap.appendChild(bird);
	var timer = setInterval(function(){
		speed+=0.5;
		var t= bird.offsetTop ;
		t+=speed;
		if(speed >= 10){
   	 		speed = 10;
   		}
   		if(speed>0){
   			bird.style.background="url(img/down_bird0.png)";
   		}else{
   			bird.style.background="url(img/up_bird0.png)";
   		}
		bird.style.top = t + 1 + 'px';
		if(bird.offsetTop > 385){
			clearInterval(timer);
		}
	},30);
} 

wrap.onclick=function(){
	speed=-7;
}

//产生随机高度的柱子
function pillarFn(){
	var topNum = randFn(213,60);
	var botNum = 273 - topNum;
	//大柱子
	var pillar = document.createElement('div');
	wrap.appendChild(pillar);
	pillar.style.width = '62px';
	pillar.style.height = '423px';
	pillar.className = 'pillar';
	//上柱子
	var topPillar = document.createElement('div');
	pillar.appendChild(topPillar);
	//下柱子
	var PillarM = document.createElement('div');
	PillarM.style.position = 'absolute';
	PillarM.style.bottom = '0px';
	pillar.appendChild(PillarM);
	//每一小节柱子
	
	//上柱子的体
	for(var i = 0; i < (topNum-60) / 2; i++){
		var smallP = document.createElement('div');
		smallP.className = 'smallP';
		topPillar.appendChild(smallP);	
	}
	//上柱子的头
	var pillarT = document.createElement('div');
	pillarT.className = 'pillart';
	topPillar.appendChild(pillarT);
	//下柱子的头
	var pillarB = document.createElement('div');
	pillarB.className = 'pillarb';
	PillarM.appendChild(pillarB);	

	//下柱子的体
	for(var j = 0; j < (botNum-60) / 2; j++){
		var smallo = document.createElement('div');
		smallo.className = 'smallo';
		PillarM.appendChild(smallo);
	}
	//让柱子移动
	var timer = setInterval(function(){
		pillar.style.left = pillar.offsetLeft - 1 + 'px';
		if(pillar.offsetLeft<-62){
			pillar.remove();
			clearInterval(timer);
		}
	},10)
}

function createP(){
	var timer1 = setInterval(function(){
		pillarFn();
	},1800);
}



		























