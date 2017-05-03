var WSManager = (function () {
    function WSManager() {
        this.TOKENS_AND_FUNCTIONS = {};
        this.TOKENS_AND_TARGETS = {};
    }
    var d = __define,c=WSManager,p=c.prototype;
    p.init = function () {
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        // this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect("127.0.0.1", 8081);
    };
    WSManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new WSManager();
            this.instance.init();
        }
        return this.instance;
    };
    p.addDataToken = function (key, func, target) {
        this.TOKENS_AND_FUNCTIONS[key] = func;
        this.TOKENS_AND_TARGETS[key] = target;
    };
    p.removeDataToken = function (key) {
        delete this.TOKENS_AND_FUNCTIONS[key];
        delete this.TOKENS_AND_TARGETS[key];
    };
    p.onReceiveMessage = function (e) {
        var msg = this.socket.readUTF();
        var tk = "test";
        var func = this.TOKENS_AND_FUNCTIONS[tk];
        var target = this.TOKENS_AND_TARGETS[tk];
        if (func && target) {
            func.call(target, msg);
        }
    };
    p.onSocketOpen = function () {
        console.log("open");
    };
    p.onSocketClose = function () {
        console.log("close");
    };
    p.onSocketError = function () {
        console.log("err");
    };
    return WSManager;
}());
egret.registerClass(WSManager,'WSManager');
