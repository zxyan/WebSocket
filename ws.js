var webSocket = new WebSocket("ws://localhost:8181/"); 
function connectServer () {
	try{
		webSocket.onopen = function (evt) {
			console.log("已经建立连接");
		};
		webSocket.onclose = function (evt) {
			console.log("已经关闭连接");
		};
		webSocket.onmessage = function (evt) {
			console.log("收到服务器消息返回evt.data:", evt.data);
		};
		webSocket.onerror = function (evt) {
			console.log("产生异常");
		};
	}catch(e){
		alert(e.message);
	}
}

function sendData () {
	try{
		webSocket.send("hellow world");
	}catch(e){
		alert(e.message);
	}
}

function seeState () {
	try{
		alert(webSocket.readyState);
	}catch(e){
		alert(e.message);
	}
}
