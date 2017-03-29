var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server,
wss = new WebSocketServer({ port: 8081 });
var wsArr = [];
var idsArr = [];
var id = 0;
wss.on('connection', function (ws) {
    console.log('client connected');
    wsArr.push(ws);
    idsArr.push(id++);
    ws.on('message', function (message) {
        console.log(idsArr[wsArr.indexOf(ws)] + "said:" + message);
    });
    ws.on('close', function (message) {
        console.log(idsArr[wsArr.indexOf(ws)] + "leave:byebye!");
        idsArr.splice(wsArr.indexOf(ws),1);
        wsArr.splice(wsArr.indexOf(ws),1);
    });
});
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};

var broad = setInterval(function(){
    //定时向客户端发送消息
    // Broadcast to all.
    var tobeCalNums = getRandom4Num();
    var str = "";
    for(var i = 0 ;i < tobeCalNums.length; i++){
        str += tobeCalNums[i];
        if(i != tobeCalNums.length -1)
            str += ",";
    }
    wss.broadcast(str);
    console.log("broadcast finished");
},10000)

function getRandom4Num(){
    var returnArr = [];
    returnArr.push(Math.floor(Math.random()*10 + 1));
    returnArr.push(Math.floor(Math.random()*10 + 1));
    returnArr.push(Math.floor(Math.random()*10 + 1));
    returnArr.push(Math.floor(Math.random()*10 + 1));
    return returnArr;
}