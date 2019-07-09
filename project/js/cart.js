class Car{
	constructor(){
		this.tbody = document.querySelector("tbody");
		this.url = "http://localhost:8181/libs/goods.json";
		this.emp = document.getElementById("emp");
		this.addevent();
		this.init();
	}
	addevent(){
		var that = this;
		this.tbody.onclick = function(eve){
			var e = eve || window.event;
			var t = e.target || e.srcElement;
			if(t.className == "del"){
				that.id = t.parentNode.getAttribute("index");
				t.parentNode.remove();
				that.setData(function(i){
					that.goods.splice(i,1);
				});
			}
		}
	}
	setData(callback){
		var that = this;
		for(var i=0;i<this.goods.length;i++){
			if(this.goods[i].id == this.id){
				callback(i);
			}
		}
		localStorage.setItem("goods",JSON.stringify(this.goods));
	}
	init(){
		var that = this;
		ajaxGet(this.url,function(res){
			that.res = JSON.parse(res);
			that.getData();
		})
	}
	getData(){
		this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
		this.display();
	}
	display(){
		
			var str = "";
			for(var i=0;i<this.res.length;i++){
				for(var j=0;j<this.goods.length;j++){
					if(this.res[i].goodsId == this.goods[j].id){
						str += `<tr index="${this.res[i].goodsId}">
							<td class="d1"><img src="${this.res[i].src}" alt=""></td>
							<td class="d2">${this.res[i].name}</td>
							<td class="d3">${this.res[i].price}</td>
							<td class="d4"><input type="number" value="${this.goods[j].num}" min=1 class="changeNum"></td>
							<td class="del">删除</td>
							</tr>` ;
							this.emp.style.display = "none";
					}
				}
			}
				this.tbody.innerHTML = str;
		}
	}


new Car();
