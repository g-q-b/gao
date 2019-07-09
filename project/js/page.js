class Page{
	constructor(options){
		this.list = options.list;
		this.left = options.btnL;
		this.right = options.btnR;
		this.pagelist = options.Pagelist;
		this.num = options.num;
		this.index = options.index;
		this.url = options.url;
		this.addevent();
		this.load();
	}
	load(){
		var that = this;
		ajaxGet(this.url,function(res){
			that.res = JSON.parse(res);
			that.pagedisplay();
			that.display();
		});
	}
	pagedisplay(){
		console.log(1);
		this.maxNum = Math.ceil(this.res.length / this.num);
		var str = "";
		for(var i=0;i<this.maxNum;i++){
			str += `<li>${i+1}</li>`
		}
		this.pagelist.innerHTML = str;
		this.li = this.pagelist.children;
//		this.Pagelist.innerHTML = str;
//		this.li = this.Pagelist.children;

		this.active();
	}
	active(){
		for(var i=0;i<this.li.length;i++){
			this.li[i].className = "";
		}
		this.li[this.index].className = "active";
	}
	display(){
		var str = "";
		for(var i=this.index*this.num;i<this.index*this.num+this.num;i++){
			if(i<this.res.length){
			str += `<li>
					        <img src="${this.res[i].url}" alt="" class="img">        
					        <h2>商品名称:<span>${this.res[i].name}</span></h2>
					        <h2>商品介绍:<span>${this.res[i].tip}</span></h2>
					        <h2>商品价格:<span>${this.res[i].price}</span></h2>
				        </li>`;
		}
		}
		this.list.innerHTML = str;
	}
	addevent(){
		var that = this;
		this.left.onclick = function(){
			that.changeIndex(1);
		}
		this.right.onclick = function(){
			that.changeIndex(2);
		}
	}
		changeIndex(type){
			if(type == 1){
				if(this.index == 0){
					this.index = this.maxNum-1;
				}else{
					this.index--;
				}
			}else{
				if(this.index == this.maxNum-1){
					this.index = 0
				}else{
					this.index++;
				}
			}
			this.active();
			this.display()
		}
	}



new Page({
	list:document.getElementById("list"),
	btnL:document.getElementById("btnL"),
	btnR:document.getElementById("btnR"),
	Pagelist:document.getElementById("pageWarp").getElementsByTagName("ul")[0],
	url:"http://localhost:8181/libs/goods.json",
	num:3,
	index:0
});

var changenum = document.getElementById("changenum");

changenum.onchange = function(){
	new Page({
	list:document.getElementById("list"),
	btnL:document.getElementById("btnL"),
	btnR:document.getElementById("btnR"),
	Pagelist:document.getElementById("pageWarp").getElementsByTagName("ul")[0],
//	Pagelist:document.querySelector(".pageWarp .ul")[0],
	url:"http://localhost:8181/libs/goods.json",
	num:parseInt(this.value),
	index:0
});

}
