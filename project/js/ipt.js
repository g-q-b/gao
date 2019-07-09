class Ipt{
   constructor(){
        this.ouser = document.getElementById("user");
        this.opass = document.getElementById("pass");
        this.obtn = document.getElementById("btn");
        this.ochk = document.getElementById("chk");
        this.init();
        this.verify()
    } 
    init(){
        this.ouser.onfocus = function(){
            this.value = "";
            this.innerHTML = this.value;
        }
    }
    verify(){
        var that = this;
        this.ouser.onblur = function(){
			var reg = /^[a-zA-Z_]\w{5,19}$/;
			if(reg.test(this.value)){
			     this.nextElementSibling.innerHTML = "√";
            }
        }
    }
}
new Ipt();