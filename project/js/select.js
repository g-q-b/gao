class Hov{
    constructor(){
        this.span = document.querySelector("#nav .bottom span");
        this.sel = document.querySelector("#image .sel");
        this.sels = document.querySelector("#image .sel-2");
        this.type = 0;
        this.init();
    }
    init(){
        var that = this;
        this.span.onclick = function(){
            if(that.type == 0){
                that.sel.style.display = "block";
                that.type = 1;
                that.inits();
            }
            else{
                that.sel.style.display = "none";
                that.sels.style.display = "none";
                that.type = 0;
            }
        }
    }
    inits(){
        var that = this;
        this.sel.onmouseover = function(){
            that.sels.style.display = "block";
            that.sel.onmouseout = function(){
                that.sels.style.display = "none";
            }
        }
    }
}
new Hov();