function ajaxGet(url,callback,data){
	data = data ? data : {};
	var str = "";
	for(var i in data){
		str = str + i+"=" + data[i] + "&";
	}
	var d = new Date();
	url = url + "?" + str + "__qb" + d.getTime();
	var xhr = new XMLHttpRequest();
	xhr.open("get",url);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}


function ajaxPost(url,callback,data){
	data = data ? data : {};
	var str = "";
	for(var i in data){
		str = str + i+"=" + data[i] + "&";
	}
	str = str.slice(0,str.length-1);	

	var xhr = new XMLHttpRequest();
	xhr.open("post",url,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			callback(xhr.responseText);
		}
	}
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(str);
}
