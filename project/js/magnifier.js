function Magnifier(){
    this.boxl = document.querySelector(".boxl");
    this.boxr = document.querySelector(".boxl1");
    this.span = document.querySelector(".boxl span");
    this.img = document.querySelector(".boxl1 img");
    this.addevent();
    // console.log(1);
}

Magnifier.prototype.init = function(){
    var w = this.img.offsetWidth / this.boxr.offsetWidth;
    var h = this.img.offsetHeight / this.boxr.offsetHeight;
    this.span.style.width = this.boxl.offsetWidth / w + "px";
    this.span.style.height = this.boxl.offsetHeight / h + "px";
}

Magnifier.prototype.addevent = function(){
    var that = this;
    this.boxl.addEventListener("mouseover",function(){
        that.over();
        that.init();
        })
    this.boxl.addEventListener("mouseout",function(){
        that.out();
        })
    this.boxl.addEventListener("mousemove",function(ele){
        var e = ele || window.event;
        that.move(e)
    });
}

Magnifier.prototype.over = function(){
    this.span.style.display = "block";
    this.img.style.display = "block";
}

Magnifier.prototype.out = function(){
    this.span.style.display = "none";
    this.img.style.display = "none";
}

Magnifier.prototype.move = function(e){
    var l = e.offsetX - this.span.offsetWidth/2;
    var t = e.offsetY - this.span.offsetHeight/2;
    if(l<0) l=0;
    if(t<0) t=0;
    if(l>this.boxl.offsetWidth - this.span.offsetWidth){
        l = this.boxl.offsetWidth - this.span.offsetWidth;
    }
    if(t>this.boxl.offsetHeight - this.span.offsetHeight){
        t = this.boxl.offsetHeight - this.span.offsetHeight;
    }
    this.span.style.left = l + "px";
    this.span.style.top = t + "px";
    var x = l/(this.boxl.offsetWidth - this.span.offsetWidth);
    var y = t/(this.boxl.offsetHeight - this.span.offsetHeight);
    this.img.style.left = -x * (this.img.offsetWidth - this.boxr.offsetWidth) + "px";
    this.img.style.top = -y * (this.img.offsetHeight - this.boxr.offsetHeight) + "px";
}

// onload = function(){
//     new Magnifier();
// }
