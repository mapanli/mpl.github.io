// JavaScript Document
window.onload = function(){
	//下载app
	var oXz = document.getElementById('xzapp1');
	var oXz2 = document.getElementById('xzapp');
	oXz.onmouseover = oXz2.onmouseover = over;
	oXz.onmouseout = oXz2.onmouseout = out;
	function over(){
		oXz2.style.display = 'block';	
	}
	function out(){
		oXz2.style.display = 'none';	
	}
	//宝贝 店铺
	var oSs1 = document.getElementById('ss1');
	var aA = oSs1.getElementsByTagName('a');
	var oI = document.getElementById('input1');
	var aI = oI.getElementsByTagName('input');
	for(i=0;i<aA.length;i++){
		aA[i].index = i;
		aA[i].onclick = function(){
			for(var i=0;i<aA.length;i++){
				aA[i].className = '';
				aI[i].className = '';		
			}		
			this.className = 'ss2';
			aI[this.index].className = 'input2';
		};		
	};	
	
	
	//下拉
	var oG = document.getElementById('gd');
	var oUl = document.getElementById('xl');
	oG.onmouseover = function(){
		oUl.style.display = 'block';		
	};	
	oG.onmouseout = function(){
		oUl.style.display = 'none';		
	};
	
	//吸顶条
	var oNav = document.getElementById('b_nav');
	var oNav2 = document.getElementById('b_nav2');
	var top = oNav.offsetTop;
	window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if(top <= scrollTop){
				oNav.style.position = 'fixed';
				oNav2.style.display = 'block';
			}else{
				oNav.style.position = '';
				oNav2.style.display = 'none';
			}
	}
	
	//右侧列表
	var oList = document.getElementById('list1');
	var aLi = oList.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover = function(){
			var aDiv=this.getElementsByTagName('div')[0];
				aDiv.style.display='block';
		};	
		aLi[i].onmouseout = function(){
			var aDiv=this.getElementsByTagName('div')[0];
				aDiv.style.display='none';
		};
	}
	
	//选项卡
	var oBanner = document.getElementById('banner');
	var aSBtn = oBanner.getElementsByTagName('span');
	var aBan = oBanner.getElementsByTagName('a');
	var timer2 = null
	var iNow = 0;
	for(i=0;i<aSBtn.length;i++){
		aSBtn[i].index = i;
		aSBtn[i].onmouseover = function(){
			for(var i=0;i<aSBtn.length;i++){
				aSBtn[i].className = '';
				aBan[i].className = '';		
			}
			iNow = this.index;		
			this.className = 'active';
			aBan[this.index].className = 'show';
		};		
	};
	
	timer2 = setInterval(next,2000);
	
	function next(){
		iNow++;
		if(iNow == aSBtn.length){
			iNow = 0;	
		}	
		tab();
	};
	function prev(){
		iNow--;
		if(iNow == -1){
			iNow = aSBtn.length-1;	
		}	
		tab();
	};
	function tab(){
		for(var i=0;i<aSBtn.length;i++){
			aSBtn[i].className = '';
			aBan[i].className = '';		
		}		
		aSBtn[iNow].className = 'active';
		aBan[iNow].className = 'show';
	};
	var oBan_left = document.getElementById('ban_left');
	var oBan_right = document.getElementById('ban_right');
	oBanner.onmouseover = function(){
		clearInterval(timer2);
		oBan_left.style.display = 'block';	
		oBan_right.style.display = 'block';	
	};
	oBanner.onmouseout = function(){
		timer2 = setInterval(next,2000);
		oBan_left.style.display = 'none';	
		oBan_right.style.display = 'none';		
	};
	oBan_left.onclick = prev;
	oBan_right.onclick = next;
	
	
	//hi范儿选项卡
	var ohf_2 = document.getElementById('hf_2');
	var ohf_21 = ohf_2.getElementsByTagName('a');
	var ohf_5 = document.getElementById('hf_5');
	var ohf_51 = ohf_5.getElementsByTagName('span');
	for(var i=0;i<ohf_51.length;i++){
		ohf_21[i].index = i;
		ohf_21[i].onclick = function(){
			for(var i=0;i<ohf_51.length;i++){
				ohf_21[i].className = '';
				ohf_51[i].className = '';	
			}
			this.className = 'hf_xhx';
			ohf_51[this.index].className = 'hf_5';		
		};	
	}
	
	//店铺推荐选项卡
	var ohdtj_2 = document.getElementById('hdtj_2');
	var ohdtj_21 = ohdtj_2.getElementsByTagName('a');
	var ohdtj_4 = document.getElementById('hdtj_4');
	var ohdtj_41 = ohdtj_4.getElementsByTagName('span');
	for(var i=0;i<ohdtj_41.length;i++){
		ohdtj_21[i].index = i;
		ohdtj_21[i].onclick = function(){
			for(var i=0;i<ohdtj_41.length;i++){
				ohdtj_21[i].className = '';
				ohdtj_41[i].className = '';	
			}
			this.className = 'hdtj_xhx';
			ohdtj_41[this.index].className = 'hdtj_a';		
		};	
	}
};